import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Countdown from '../../src/components/ui/Countdown';

describe('Countdown', () => {
  it('renders time units', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-20T00:00:00Z'));
    render(<Countdown targetDate="2026-10-24T00:00:00Z" />);
    expect(screen.getByText(/Days/i)).toBeDefined();
    expect(screen.getByText(/4/i)).toBeDefined();
    vi.useRealTimers();
  });
});
