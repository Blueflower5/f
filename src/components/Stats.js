export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Start adding</p>;
  const numItems = items.length;
  const packedItems = items.filter((items) => items.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {" "}
        {percentage === 100
          ? "Ready to Go"
          : `You have ${numItems} items on your list, and you already packed
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
