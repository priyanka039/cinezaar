import React from 'react';
import styled from 'styled-components';
import { useFavorites } from '../context/FavoritesContext';

const Card = styled.div`
  background: #132238;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(13, 27, 42, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
  border: 2px solid transparent;
  &:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 6px 32px rgba(255, 215, 0, 0.18);
    border: 2px solid var(--color-accent);
  }
  &:active, &:focus-within {
    border: 2px solid var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent);
  }
`;

const Poster = styled.img`
  width: 150px;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  background: #233554;
  box-shadow: 0 2px 8px rgba(13, 27, 42, 0.18);
`;

const Title = styled.h3`
  font-family: var(--font-title);
  color: var(--color-accent);
  font-size: 1.1rem;
  margin: 0.7rem 0 0.2rem 0;
  text-align: center;
`;

const Year = styled.p`
  color: var(--color-neutral);
  font-size: 0.95rem;
  margin: 0 0 0.5rem 0;
`;

const FavButton = styled.button`
  background: ${({ isFav }) => (isFav ? 'var(--color-success)' : 'var(--color-accent)')};
  color: var(--color-primary);
  border: none;
  border-radius: 4px;
  padding: 0.4rem 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  outline: none;
  box-shadow: 0 2px 8px rgba(13, 27, 42, 0.08);
  &:hover {
    background: ${({ isFav }) => (isFav ? 'var(--color-error)' : 'var(--color-success)')};
    box-shadow: 0 4px 16px rgba(46, 204, 113, 0.18);
  }
  &:focus {
    outline: 2px solid var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent);
  }
`;

const MovieCard = ({ movie, onClick }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFav = favorites.some((m) => m.imdbID === movie.imdbID);

  return (
    <Card>
      <Poster
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x220?text=No+Image'}
        alt={movie.Title}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      />
      <Title>{movie.Title}</Title>
      <Year>{movie.Year}</Year>
      <FavButton
        isFav={isFav}
        onClick={() => (isFav ? removeFavorite(movie.imdbID) : addFavorite(movie))}
      >
        {isFav ? 'Remove Favorite' : 'Add to Favorites'}
      </FavButton>
    </Card>
  );
};

export default MovieCard; 