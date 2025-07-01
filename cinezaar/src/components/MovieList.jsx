import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import SkeletonLoader from './SkeletonLoader';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.2rem;
  margin: 2rem 0;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const Message = styled.p`
  color: var(--color-neutral);
  text-align: center;
  font-size: 1.1rem;
`;

const NoResults = () => (
  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1rem' }}>
      <circle cx="60" cy="60" r="56" fill="#233554" stroke="#FFD700" strokeWidth="6" />
      <ellipse cx="60" cy="80" rx="28" ry="10" fill="#FFD700" fillOpacity="0.15" />
      <rect x="40" y="45" width="40" height="18" rx="9" fill="#FFD700" fillOpacity="0.7" />
      <rect x="50" y="70" width="20" height="6" rx="3" fill="#FFD700" fillOpacity="0.7" />
      <circle cx="50" cy="54" r="3" fill="#233554" />
      <circle cx="70" cy="54" r="3" fill="#233554" />
      <rect x="54" y="60" width="12" height="2" rx="1" fill="#233554" />
    </svg>
    <Message>No movies found.<br/>Try a different search or filter.</Message>
  </div>
);

const MovieList = ({ movies, loading, error, onMovieClick }) => {
  if (loading) return <SkeletonLoader count={8} />;
  if (error) return <Message style={{ color: 'var(--color-error)' }}>{error}</Message>;
  if (!movies || movies.length === 0) return <NoResults />;

  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick ? () => onMovieClick(movie) : undefined} />
      ))}
    </Grid>
  );
};

export default MovieList; 