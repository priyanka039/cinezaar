import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from '../components/MovieList';
import ErrorBoundary from '../components/ErrorBoundary';
import { useFavorites } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <ErrorBoundary>
      <section>
        <h2 style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-title)', marginBottom: '1.5rem' }}>Your Favorites</h2>
        <MovieList movies={favorites} loading={false} error={null} onMovieClick={handleMovieClick} />
        {favorites.length === 0 && (
          <p style={{ color: 'var(--color-neutral)', textAlign: 'center', marginTop: '2rem' }}>
            You have no favorite movies yet. Add some from the Home page!
          </p>
        )}
      </section>
    </ErrorBoundary>
  );
};

export default Favorites; 