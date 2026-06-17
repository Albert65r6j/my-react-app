export default function LocationFilter({ value, onChange }) {
  return (
    <div className="filter-group">
      <label>LOCATION</label>
      <div className="select-wrapper">
        <select value={value} onChange={e => onChange(e.target.value)}>
          <option value="">Select the location</option>
          <option value="Louvre">Louvre</option>
          <option value="State Hermitage Museum">State Hermitage Museum</option>
        </select>
      </div>
    </div>
  );
}
