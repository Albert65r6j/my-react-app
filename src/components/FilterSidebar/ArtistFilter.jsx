export default function ArtistFilter({ value, onChange }) {
  return (
    <div className="filter-group">
      <label>ARTIST</label>
      <div className="select-wrapper">
        <select value={value} onChange={e => onChange(e.target.value)}>
          <option value="">Select the artist</option>
          <option value="Vincent Van Gogh">Vincent Van Gogh</option>
          <option value="Ivan Aivazovsky">Ivan Aivazovsky</option>
        </select>
      </div>
    </div>
  );
}