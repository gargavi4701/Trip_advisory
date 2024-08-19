import { useState } from "react";
import Item from "./Item.jsx";

export default function Packinglist({ items, onDeleteItem, onToggleItems, onClearList }) {
  const [sorted, setSorted] = useState("input");
  let sortedItem;
  if (sorted === "input") sortedItem = items;
  if (sorted === "description") sortedItem = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sorted === "packed") sortedItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className='list'>
      <ul>
        {sortedItem.map(pack => <Item onToggleItems={onToggleItems} onDeleteItem={onDeleteItem} key={pack.id} item={pack}></Item>)}
      </ul>
      <div className='actions'>
        <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed order</option>
        </select>
        <button onClick={onClearList}> Clear List</button>
      </div>
    </div>
  );
}
