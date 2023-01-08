import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import SearchBar from './components/SearchBar';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Crypto Coins./);
  expect(linkElement).toBeInTheDocument();
});

test("currency selection test", () => {
  render(<SearchBar handleCurrencyChange={function (e: React.ChangeEvent<HTMLSelectElement>): void {
    throw new Error('Function not implemented.');
  } } />);
  expect(screen.getByText("INR")).toBeInTheDocument();
  fireEvent.click(screen.getByText("INR"));
  fireEvent.click(screen.getByText("USD"));
  expect(screen.getByText("USD")).toBeInTheDocument();
});
