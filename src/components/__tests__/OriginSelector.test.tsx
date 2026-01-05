import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { OriginSelector } from '../OriginSelector';

describe('OriginSelector', () => {
  it('renders all options', () => {
    render(<OriginSelector selected="engine" onSelect={() => {}} />);
    expect(screen.getByText('Engine Bay')).toBeInTheDocument();
    expect(screen.getByText('Wheels/Brakes')).toBeInTheDocument();
    expect(screen.getByText('Undercarriage')).toBeInTheDocument();
  });

  it('highlights the selected option', () => {
    render(<OriginSelector selected="engine" onSelect={() => {}} />);
    const engineBtn = screen.getByRole('button', { name: /engine bay/i });
    expect(engineBtn).toHaveAttribute('aria-pressed', 'true');
  });

  it('calls onSelect when clicked', () => {
    const handleSelect = vi.fn();
    render(<OriginSelector selected="engine" onSelect={handleSelect} />);
    
    const wheelsBtn = screen.getByRole('button', { name: /wheels/i });
    fireEvent.click(wheelsBtn);
    
    expect(handleSelect).toHaveBeenCalledWith('wheels');
  });
});