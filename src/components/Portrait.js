import Image from "next/image";

// Framed portrait with small editorial labels. Without `src` it shows an "AS" monogram.
export default function Portrait({
  src,
  alt = "Portrait of Aadesh Sharma",
  caption = "Portrait",
  index = "01",
  focus = "center",
  sizes = "(max-width: 900px) 100vw, 40vw",
  preload = false,
  className = "",
}) {
  return (
    <figure className={`portrait ${className}`.trim()} style={{ margin: 0 }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} style={{ objectPosition: focus }} />
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
