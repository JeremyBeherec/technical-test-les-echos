import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Heading, HeadingProps } from './Heading';

const renderComponent = (props: HeadingProps) => {
  return render(<Heading { ...props } />);
}

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    renderComponent({
      variant: 'h1',
    });

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
