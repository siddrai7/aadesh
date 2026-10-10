import { Star } from "./Icons";

export default function Marquee({ items, dark = false, speed }) {
  const group = (hidden) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span className="marquee__item">{item}</span>
          <Star className="marquee__star" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee${dark ? " dark" : ""}`}>
      <div className="marquee__track" style={speed ? { animationDuration: speed } : undefined}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
