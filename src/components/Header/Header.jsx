import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SearchBar from '../SearchBar/SearchBar';
import FilterButton from '../FilterButton/FilterButton';

export default function Header({ theme, onToggleTheme, onFilterOpen, search, onSearchChange }) {
  return (
    <header className="header">
      <div className="header__theme-row">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div className="header__search-row">
        <div className="search-container">
          <SearchBar value={search} onChange={onSearchChange} />
          <FilterButton onClick={onFilterOpen} />
        </div>
      </div>
    </header>
  );
}
