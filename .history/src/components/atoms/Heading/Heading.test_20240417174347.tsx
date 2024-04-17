import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Heading, HeadingProps } from './Heading';

const renderComponent = (props: HeadingProps) => {
  return render(<Heading { ...props } />);
}

describe('Heading', () => {
  it('should render a heading', () => {
    const props = {
      variant: 'h1',
      children: 'something something',
    } satisfies HeadingProps;

    renderComponent(props);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(screen.getByText(props.children)).toBeInTheDocument();
  });
});
