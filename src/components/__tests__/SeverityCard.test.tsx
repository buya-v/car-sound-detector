import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SeverityCard } from '../SeverityCard';

describe('SeverityCard', () => {
  it('renders red severity correctly', () => {
    render(<SeverityCard severity="red" title="Critical Failure" confidence={95} />);
    expect(screen.getByText('Do Not Drive')).toBeInTheDocument();
    expect(screen.getByText('Critical Failure')).toBeInTheDocument();
    // Verify background color class presence indirectly or specific text styling if needed
  });

  it('renders green severity correctly', () => {
    render(<SeverityCard severity="green" title="Normal Operation" confidence={99} />);
    expect(screen.getByText('Safe to Drive')).toBeInTheDocument();
  });
});