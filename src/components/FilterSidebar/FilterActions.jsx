export default function FilterActions({ onShow, onClear }) {
  return (
    <>
      <button className="btn-show" onClick={onShow}>SHOW THE RESULTS</button>
      <button className="btn-clear" onClick={onClear}>CLEAR</button>
    </>
  );
}