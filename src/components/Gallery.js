"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Close, Expand, Play } from "./Icons";

// Desktop: 12-column rows that alternate wide/narrow tiles. Phones: a swipe row.
const ROWS = [
  [7, 5],
  [4, 8],
  [5, 7],
  [8, 4],
];

function spanFor(photo, i, count) {
  if (photo.span) return photo.span;
  const lastAndAlone = i % 2 === 0 && i === count - 1;
  return lastAndAlone ? 12 : ROWS[Math.floor(i / 2) % ROWS.length][i % 2];
}

const pad = (n) => String(n).padStart(2, "0");
const srcOf = (photo) => `/images/gallery/${photo.file}`;
const keyOf = (photo) => photo.file || photo.video;

export default function Gallery({ photos }) {
  const dialogRef = useRef(null);
  const listRef = useRef(null);
  const touchStartX = useRef(null);
  const [index, setIndex] = useState(null);
  const count = photos.length;
  const single = count === 1;
  const current = index === null ? null : photos[index];

  const open = (i) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (dir) => setIndex((i) => (i + dir + count) % count);

  // Arrow keys while the viewer is open (Esc is handled by <dialog> itself).
  useEffect(() => {
    const dialog = dialogRef.current;
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    dialog.addEventListener("keydown", onKey);
    return () => dialog.removeEventListener("keydown", onKey);
  }, [count]);

  // Video tiles play silently while on screen, and pause when scrolled away.
  // With `preview: [start, end]` they loop just that part of the clip.
  useEffect(() => {
    const videos = [...(listRef.current?.querySelectorAll("video") ?? [])];
    if (!videos.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cleanups = videos.map((v) => {
      const [start, end] = (v.dataset.preview || "").split(",").map(Number);
      if (!end) return () => {};
      const seekStart = () => (v.currentTime = start);
      const wrap = () => v.currentTime >= end && seekStart();
      v.addEventListener("loadedmetadata", seekStart, { once: true });
      v.addEventListener("timeupdate", wrap);
      return () => v.removeEventListener("timeupdate", wrap);
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) target.play().catch(() => {});
          else target.pause();
        }),
      { threshold: 0.4 }
    );
    videos.forEach((v) => io.observe(v));
    return () => {
      io.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50 && !single) step(dx < 0 ? 1 : -1);
  };

  return (
    <>
      {!single && (
        <span className="swipe-hint label" aria-hidden="true">
          Swipe →
        </span>
      )}
      <ul ref={listRef} className={`gallery${single ? " gallery--single" : ""}`}>
        {photos.map((p, i) => (
          <li
            key={keyOf(p)}
            className="gallery__item reveal"
            style={{ "--span": spanFor(p, i, count), "--d": `${(i % 2) * 0.08}s` }}
          >
            <figure>
              {p.video ? (
                <video
                  className="gallery__video"
                  src={p.video}
                  poster={p.poster}
                  data-preview={p.preview?.join(",")}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  style={{ objectPosition: p.focus || "center" }}
                />
              ) : (
                <Image
                  src={srcOf(p)}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 900px) 66vw, 90vw"
                  style={{ objectPosition: p.focus || "center" }}
                />
              )}
              {(p.caption || p.tag) && (
                <figcaption>
                  {p.tag && <span className="gallery__tag">{p.tag}</span>}
                  {p.caption && <span className="gallery__caption">{p.caption}</span>}
                </figcaption>
              )}
            </figure>
            <button
              type="button"
              className="gallery__open"
              onClick={() => open(i)}
              aria-label={`${p.video ? "Play video with sound" : "View photo full size"}${p.caption ? `: ${p.caption}` : ""}`}
            >
              <span className={`gallery__zoom${p.video ? " gallery__zoom--play" : ""}`} aria-hidden="true">
                {p.video ? <Play /> : <Expand />}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className="lightbox" aria-label="Photo viewer" onClose={() => setIndex(null)}>
        {current && (
          <>
            <div className="lightbox__top">
              <span className="label">
                {pad(index + 1)} / {pad(count)}
              </span>
              <button type="button" className="lightbox__btn" onClick={close} aria-label="Close photo viewer">
                <Close />
              </button>
            </div>

            <div className="lightbox__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              {current.video ? (
                <video
                  key={current.video}
                  className="lightbox__video"
                  src={current.video}
                  poster={current.poster}
                  controls
                  autoPlay
                  playsInline
                  aria-label={current.alt}
                />
              ) : (
                <Image key={current.file} src={srcOf(current)} alt={current.alt} fill sizes="100vw" />
              )}
            </div>

            <div className="lightbox__bottom">
              <div className="lightbox__caption">
                {current.tag && <span className="label">{current.tag}</span>}
                {current.caption && <span className="lightbox__title">{current.caption}</span>}
              </div>
              {!single && (
                <div className="lightbox__nav">
                  <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Previous photo">
                    <ArrowRight />
                  </button>
                  <button type="button" className="lightbox__btn" onClick={() => step(1)} aria-label="Next photo">
                    <ArrowRight />
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
