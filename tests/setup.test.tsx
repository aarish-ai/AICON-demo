import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import RootLayout from '../src/app/layout';

describe('RootLayout', () => {
  it('renders children with Lenis smooth scrolling class', () => {
    // Note: React Testing Library + JSDOM strips <html> and <body> tags when rendering inside a div.
    // To correctly test the RootLayout without anti-patterns (like calling the component as a function),
    // we use renderToString to verify the output HTML structure.
    const html = renderToString(
      <RootLayout>
        <div data-testid="child">Test</div>
      </RootLayout>
    );
    expect(html).toContain('class="lenis"');
  });
});
