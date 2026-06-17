import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useFilters } from './hooks/useFilters';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import GalleryGrid from './components/GalleryGrid/GalleryGrid';
import Pagination from './components/Pagination/Pagination';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import { useState } from 'react';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const filters = useFilters();

  const perPage = 6;
  const totalPages = Math.ceil(filters.filtered.length / perPage);
  const paginatedData = filters.filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const searchedData = search
    ? paginatedData.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    : paginatedData;

  return (
    <div className={theme === 'dark' ? 'dark-theme' : ''}>
      <Layout>
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          onFilterOpen={() => setSidebarOpen(true)}
          search={search}
          onSearchChange={setSearch}
        />
        <GalleryGrid paintings={searchedData} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        <FilterSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          artist={filters.artist}
          onArtistChange={filters.setArtist}
          location={filters.location}
          onLocationChange={filters.setLocation}
          yearFrom={filters.yearFrom}
          onYearFromChange={filters.setYearFrom}
          yearTo={filters.yearTo}
          onYearToChange={filters.setYearTo}
          onShow={() => setSidebarOpen(false)}
          onClear={filters.clearFilters}
        />
      </Layout>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}