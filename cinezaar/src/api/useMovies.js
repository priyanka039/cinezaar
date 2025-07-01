import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const OMDB_API_KEY = 'b2cc3386'; // User's real OMDB API key
const OMDB_URL = 'https://www.omdbapi.com/';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export function useMovies({ search, year, type }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const debouncedSearch = useDebounce(search, 500);

  const fetchMovies = useCallback(async () => {
    if (!debouncedSearch) {
      setMovies([]);
      setTotalResults(0);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const params = {
        apikey: OMDB_API_KEY,
        s: debouncedSearch,
        y: year || undefined,
        type: type || undefined,
        page: 1,
      };
      const { data } = await axios.get(OMDB_URL, { params });
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error || 'No movies found.');
      }
    } catch (err) {
      setError('Failed to fetch movies.');
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, year, type]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { movies, loading, error, totalResults };
}

export async function fetchMovieById(imdbID) {
  try {
    const params = {
      apikey: OMDB_API_KEY,
      i: imdbID,
      plot: 'full',
    };
    const { data } = await axios.get(OMDB_URL, { params });
    if (data.Response === 'True') {
      return data;
    } else {
      throw new Error(data.Error || 'Movie not found.');
    }
  } catch (err) {
    throw new Error('Failed to fetch movie details.');
  }
} 