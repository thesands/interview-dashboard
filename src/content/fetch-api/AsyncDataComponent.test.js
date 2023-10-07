import React from 'react';
import { render, waitFor } from '@testing-library/react';
import AsyncDataComponent from './AsyncDataComponent';

// jest.mock('./fetchData');

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

test('renders data when fetched successfully', async () => {
  const { getByText } = render(<AsyncDataComponent url={URL} />);
  const element = await waitFor(() => getByText('data received'));
  expect(element).toBeInTheDocument();
});
