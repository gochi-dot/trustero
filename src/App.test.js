import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Cities', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("These are the cities");
  expect(linkElement).toBeInTheDocument();
});
