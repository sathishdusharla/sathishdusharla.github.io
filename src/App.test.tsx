import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText(/Secure. Transparent./i)).toBeInTheDocument();
    expect(screen.getByText(/Reliable Voting for Everyone/i)).toBeInTheDocument();
  });
});