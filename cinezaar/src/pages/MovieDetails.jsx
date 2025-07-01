import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieById } from '../api/useMovies';
import ErrorBoundary from '../components/ErrorBoundary';
import styled from 'styled-components';

const DetailsCard = styled.div`
  background: #132238;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(13, 27, 42, 0.18);
  padding: 2rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin: 2rem auto;
  max-width: 800px;
  color: var(--color-neutral);
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }
`;

const Poster = styled.img`
  width: 220px;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
  background: #233554;
  @media (max-width: 700px) {
    width: 160px;
    height: 220px;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  color: var(--color-accent);
  font-family: var(--font-title);
  margin: 0 0 1rem 0;
`;

const Label = styled.span`
  color: var(--color-accent);
  font-weight: bold;
`;

const BackButton = styled.button`
  background: var(--color-accent);
  color: var(--color-primary);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  font-family: var(--font-title);
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  &:hover {
    background: var(--color-success);
    color: var(--color-primary);
    box-shadow: 0 2px 8px rgba(46, 204, 113, 0.18);
  }
  &:focus {
    outline: 2px solid var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent);
  }
`;

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchMovieById(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <ErrorBoundary>
      <BackButton onClick={() => navigate('/')}>← Back to Home</BackButton>
      {loading && <p style={{ color: 'var(--color-accent)', textAlign: 'center' }}>Loading movie details...</p>}
      {error && <p style={{ color: 'var(--color-error)', textAlign: 'center' }}>{error}</p>}
      {movie && !loading && !error && (
        <DetailsCard>
          <Poster
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/220x320?text=No+Image'}
            alt={movie.Title}
          />
          <Info>
            <Title>{movie.Title} ({movie.Year})</Title>
            <p><Label>Genre:</Label> {movie.Genre}</p>
            <p><Label>Director:</Label> {movie.Director}</p>
            <p><Label>Actors:</Label> {movie.Actors}</p>
            <p><Label>Plot:</Label> {movie.Plot}</p>
            <p><Label>IMDB Rating:</Label> {movie.imdbRating}</p>
            <p><Label>Language:</Label> {movie.Language}</p>
            <p><Label>Runtime:</Label> {movie.Runtime}</p>
            <p><Label>Type:</Label> {movie.Type}</p>
          </Info>
        </DetailsCard>
      )}
    </ErrorBoundary>
  );
};

export default MovieDetails; 