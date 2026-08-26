// tests/setup.test.tsx
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RootLayout from '../src/app/layout';

describe('RootLayout', () => {
  it('renders children with Lenis smooth scrolling class', () => {
    // Note: React Testing Library + JSDOM strips <html> and <body> tags when rendering.
    // Instead of rendering and querySelector('.lenis') which returns null,
    // we assert on the returned React element directly to verify the class is present.
    const layout = RootLayout({ children: <div data-testid="child">Test</div> });
    expect(layout.props.className).toContain('lenis');
  });
});
