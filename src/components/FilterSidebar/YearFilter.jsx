export default function YearFilter({ from, onFromChange, to, onToChange }) {
  return (
    <div className="filter-group">
      <label>YEARS</label>
      <div className="range-inputs">
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={e => onFromChange(e.target.value)}
        />
        <span className="range-divider">—</span>
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={e => onToChange(e.target.value)}
        />
      </div>
    </div>
  );
}