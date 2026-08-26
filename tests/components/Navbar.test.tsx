import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../../src/components/sections/Navbar';

describe('Navbar', () => {
  it('renders the register CTA button', () => {
    render(<Navbar />);
    const cta = screen.getByRole('button', { name: /register/i });
    expect(cta).toBeDefined();
    expect(cta.className).toContain('bg-aicon-yellow');
  });
});
