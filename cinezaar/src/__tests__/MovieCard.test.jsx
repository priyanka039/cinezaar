import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from '../components/MovieCard';
import { FavoritesProvider } from '../context/FavoritesContext';

const movie = {
  imdbID: 'tt1234567',
  Title: 'Test Movie',
  Year: '2022',
  Poster: 'https://via.placeholder.com/150x220?text=Test',
};

describe('MovieCard', () => {
  it('renders movie title, year, and poster', () => {
    render(
      <FavoritesProvider>
        <MovieCard movie={movie} />
      </FavoritesProvider>
    );
    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', movie.Poster);
  });

  it('can add and remove from favorites', () => {
    render(
      <FavoritesProvider>
        <MovieCard movie={movie} />
      </FavoritesProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Add to Favorites');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Remove Favorite');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Add to Favorites');
  });
}); 