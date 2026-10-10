import Image from "next/image";

// Drop a photo into /public (e.g. /public/aadesh.jpg) and pass `src` to replace the monogram.
export default function Portrait({ src, alt = "Portrait of Aadesh Sharma", caption = "Portrait", index = "01", priority = false }) {
  return (
    <figure className="portrait" style={{ margin: 0 }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 40vw" priority={priority} />
      ) : (
        <span className="portrait__mono" aria-hidden="true">AS</span>
      )}
      <span className="portrait__corner">({index})</span>
      <figcaption className="portrait__meta">
        <span>{caption}</span>
        <span>Aadesh Sharma</span>
      </figcaption>
    </figure>
  );
}
