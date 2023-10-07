import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('should start at zero', () => {
    const { queryByText } = render(<Counter />);
    const paragraph = queryByText(/2 3 4!/);
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toBe('0 2 3 4!');
  });

  it('should increment on click', () => {
    const { queryByText } = render(<Counter />);
    const paragraph = queryByText(/2 3 4!/);
    fireEvent.click(paragraph);
    expect(paragraph.textContent).toBe('1 2 3 4!');
    fireEvent.click(paragraph);
    expect(paragraph.textContent).toBe('2 2 3 4!');
  });
});
