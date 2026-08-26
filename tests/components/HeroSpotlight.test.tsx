import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSpotlight from '../../src/components/sections/hero-concepts/HeroSpotlight';

describe('HeroSpotlight', () => {
  it('renders marquee and container', () => {
    render(<HeroSpotlight />);
    expect(screen.getAllByText(/ARTIFICIAL INTELLIGENCE/i).length).toBeGreaterThan(0);
  });
});
