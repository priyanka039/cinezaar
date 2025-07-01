import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  it('renders input and button', () => {
    render(<SearchForm onSearch={jest.fn()} />);
    expect(screen.getByPlaceholderText('Search movies...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('validates input and calls onSearch', async () => {
    const onSearch = jest.fn();
    render(<SearchForm onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Search movies...');
    const button = screen.getByRole('button', { name: /search/i });

    // Try submitting empty
    fireEvent.click(button);
    expect(await screen.findByText(/required/i)).toBeInTheDocument();

    // Enter valid input
    fireEvent.change(input, { target: { value: 'Batman' } });
    fireEvent.click(button);
    await waitFor(() => expect(onSearch).toHaveBeenCalledWith('Batman'));
  });
}); 