// src/components/ui/Checklist.jsx

function Checklist({ items }) {
  return (
    <ul className="gobierno__checklist">
      {items.map((item, i) => (
        <li key={i}>
          <span className="gobierno__check">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Checklist;