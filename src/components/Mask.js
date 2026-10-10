// Line-by-line masked reveal for headings. Wrap each line in its own entry.
export default function Mask({ lines, as: Tag = "h1", className, step = 0.08, delay = 0 }) {
  return (
    <Tag className={className} data-reveal>
      {lines.map((line, i) => (
        <span className="mask" key={i}>
          <span style={{ "--d": `${delay + i * step}s` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
