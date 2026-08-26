// tests/app/page.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../../src/app/page';

describe('Home Live Switcher', () => {
  it('renders switcher and toggles concepts', () => {
    render(<Home />);
    const btn2 = screen.getByRole('button', { name: /Concept 2/i });
    expect(btn2).toBeDefined();
    fireEvent.click(btn2);
    expect(btn2.className).toContain('bg-aicon-yellow');
  });
});
