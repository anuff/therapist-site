export default function Accordion({ title, content, isOpen = false }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <span>{isOpen ? '−' : '+'}</span>
      </div>

      {isOpen && <p>{content}</p>}
    </div>
  );
}
