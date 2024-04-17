import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Heading, HeadingProps } from './Heading';

const renderComponent = (props: HeadingProps) => {
  return render(<Heading { ...props } />);
}

describe('Heading', () => {
  it('should render a heading in the document', () => {
    renderComponent({
      variant: 'h1',
    });

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
});
