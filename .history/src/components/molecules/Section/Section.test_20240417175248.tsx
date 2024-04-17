import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Section, SectionProps } from './Section';

const renderComponent = (props: SectionProps) => {
  return render(<Section { ...props } />);
}

describe('Section', () => {
  it('should render the title and children', () => {
    const props = {
      title: 'Newsletters',
      children: 'some content',
    } satisfies SectionProps;

    renderComponent(props);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.children)).toBeInTheDocument();
  });
});
