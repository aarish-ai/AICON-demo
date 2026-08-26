import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroGlitch from '../../src/components/sections/hero-concepts/HeroGlitch';

describe('HeroGlitch', () => {
  it('renders all shards', () => {
    const { container } = render(<HeroGlitch />);
    expect(container.getElementsByClassName('shard').length).toBe(3);
  });
});
