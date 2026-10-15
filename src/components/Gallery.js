import Image from "next/image";

// Desktop: 12-column rows that alternate wide/narrow tiles. Phones: a swipe row.
const ROWS = [
  [7, 5],
  [4, 8],
  [5, 7],
  [8, 4],
];

function spanFor(i, count) {
  const lastAndAlone = i % 2 === 0 && i === count - 1;
  return lastAndAlone ? 12 : ROWS[Math.floor(i / 2) % ROWS.length][i % 2];
}

export default function Gallery({ photos }) {
  const single = photos.length === 1;
  return (
    <>
      {!single && (
        <span className="swipe-hint label" aria-hidden="true">
          Swipe →
        </span>
      )}
      <ul className={`gallery${single ? " gallery--single" : ""}`}>
        {photos.map((p, i) => (
          <li
            key={p.file}
            className="gallery__item reveal"
            style={{ "--span": spanFor(i, photos.length), "--d": `${(i % 2) * 0.08}s` }}
          >
            <figure>
              <Image
                src={`/images/gallery/${p.file}`}
                alt={p.alt}
                fill
                sizes="(min-width: 900px) 66vw, 90vw"
                style={{ objectPosition: p.focus || "center" }}
              />
              {(p.caption || p.tag) && (
                <figcaption>
                  {p.tag && <span className="gallery__tag">{p.tag}</span>}
                  {p.caption && <span className="gallery__caption">{p.caption}</span>}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
