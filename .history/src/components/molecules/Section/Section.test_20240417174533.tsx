import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Section, SectionProps } from './Section';

const renderComponent = (props: SectionProps) => {
  return render(<Section { ...props } />);
}

describe('Section', () => {
  it('should render a section', () => {
    const props = {
      title: 'Newsletters',
      children: 'some content',
    } satisfies SectionProps;

    renderComponent(props);

    screen.debug();

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.children)).toBeInTheDocument();
  });
});
