import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterReducer from './CounterReducer';

test('renders the count and buttons', () => {
  const { getByText } = render(<CounterReducer />);
  const count = getByText('Count: 0');
  const incrementButton = getByText('+');
  const decrementButton = getByText('-');

  expect(count).toBeInTheDocument();
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('increments the count when the + button is clicked', () => {
  const { getByText } = render(<CounterReducer />);
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  const count = getByText('Count: 1');

  expect(count).toBeInTheDocument();
});

test('decrements the count when the - button is clicked', () => {
  const { getByText } = render(<CounterReducer />);
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  const count = getByText('Count: -1');

  expect(count).toBeInTheDocument();
});
