export default function Item({ item }) {
  const { id, title, completed } = item;

  // render
  return (
    <ul className="item">
      <li>Id: {id}</li>
      <li>Name: {title}</li>
      <li>Status: {completed ? "Yes" : "No"} </li>
    </ul>
  );
}
