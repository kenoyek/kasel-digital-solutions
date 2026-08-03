export default function ProjectTagList({
  items,
  label,
  variant = "neutral",
}: {
  items: string[];
  label: string;
  variant?: "neutral" | "service" | "technology";
}) {
  return (
    <ul aria-label={label} className={`tag-list tag-list--${variant}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
