import ArtistFilter from './ArtistFilter';
import LocationFilter from './LocationFilter';
import YearFilter from './YearFilter';
import FilterActions from './FilterActions';

export default function FilterSidebar({
  isOpen,
  onClose,
  artist,
  onArtistChange,
  location,
  onLocationChange,
  yearFrom,
  onYearFromChange,
  yearTo,
  onYearToChange,
  onShow,
  onClear,
}) {
  return (
    <>
      {/* Оверлей при открытом сайдбаре */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar__header">
          <button onClick={onClose} className="btn-close">&times;</button>
        </div>

        <div className="sidebar__content">
          <ArtistFilter value={artist} onChange={onArtistChange} />
          <LocationFilter value={location} onChange={onLocationChange} />
          <YearFilter from={yearFrom} onFromChange={onYearFromChange} to={yearTo} onToChange={onYearToChange} />

          <div className="sidebar__footer">
            <FilterActions onShow={onShow} onClear={onClear} />
          </div>
        </div>
      </aside>
    </>
  );
}