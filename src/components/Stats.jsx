export default function Stats({ items }) {
  if (!items.length) return <p className='stats'><em>Start Adding Some items to your packing list 🚀</em></p>;
  const numItem = items.length;
  const numpacked = items.filter(it => it.packed).length;
  const percent = Math.round((numpacked / numItem) * 100);
  return (
    <footer className='stats'>

      <em> {percent === 100 ? "You got everything Ready to go ✈" :
        `💼 You have ${numItem} item in your todo list and have already added ${numpacked} items (${percent}%)`}</em>
    </footer>
  );
}
