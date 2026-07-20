import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /simran khurmi/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /selected projects/i })).toBeInTheDocument();
});
