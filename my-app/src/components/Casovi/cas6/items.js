function Items({ name, isBought }) {
  return (
    <li>
      {name} {isBought ? "x" : "nije"}
    </li>
  );
}

export default Items;
