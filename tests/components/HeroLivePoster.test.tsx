// tests/components/HeroLivePoster.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroLivePoster from '../../src/components/sections/hero-concepts/HeroLivePoster';

describe('HeroLivePoster', () => {
  it('renders the live poster text', () => {
    render(<HeroLivePoster />);
    expect(screen.getAllByText(/AI/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/CON/i)).toBeDefined();
  });
});
