import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import FilterBar from '../components/FilterBar';
import MovieList from '../components/MovieList';
import ErrorBoundary from '../components/ErrorBoundary';
import { useMovies } from '../api/useMovies';

const Home = () => {
  const [search, setSearch] = useState('Avengers');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const { movies, loading, error, totalResults } = useMovies({ search, year, type });

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <ErrorBoundary>
      <section>
        <SearchForm onSearch={setSearch} initialSearch={search} />
        <FilterBar
          year={year}
          type={type}
          onYearChange={e => setYear(e.target.value)}
          onTypeChange={e => setType(e.target.value)}
        />
        {search && !loading && !error && (
          <p style={{ color: 'var(--color-neutral)', margin: '0 0 1rem 0', textAlign: 'right' }}>
            {totalResults > 0 ? `${totalResults} results found` : ''}
          </p>
        )}
        <MovieList movies={movies} loading={loading} error={error} onMovieClick={handleMovieClick} />
      </section>
    </ErrorBoundary>
  );
};

export default Home; 