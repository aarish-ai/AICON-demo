// tests/app/page.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../../src/app/page';

describe('Home Page', () => {
  it('renders without the live switcher', () => {
    render(<Home />);
    expect(screen.queryByText(/Concept 1/i)).toBeNull();
  });
});
