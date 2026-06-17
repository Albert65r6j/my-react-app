import { useState, useMemo } from 'react';
import { paintings } from '../data/paintings';

export function useFilters() {
  const [artist, setArtist] = useState('');
  const [location, setLocation] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');

  const filtered = useMemo(() => {
    return paintings.filter(p => {
      const matchArtist = !artist || p.artist === artist;
      const matchLocation = !location || p.location === location;
      const matchYearFrom = !yearFrom || p.year >= Number(yearFrom);
      const matchYearTo = !yearTo || p.year <= Number(yearTo);
      return matchArtist && matchLocation && matchYearFrom && matchYearTo;
    });
  }, [artist, location, yearFrom, yearTo]);

  const clearFilters = () => {
    setArtist('');
    setLocation('');
    setYearFrom('');
    setYearTo('');
  };

  return {
    artist, setArtist,
    location, setLocation,
    yearFrom, setYearFrom,
    yearTo, setYearTo,
    filtered,
    clearFilters
  };
}
