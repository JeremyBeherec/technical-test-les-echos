import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { lesEchos } from '~/data/newsletters';

import { NewsletterSection, NewsletterSectionProps } from './NewsletterSection';

const renderComponent = (props: NewsletterSectionProps) => {
  return render(<NewsletterSection { ...props } />);
}

describe('NewsletterSection', () => {
  it('should render a Newslettersection', () => {
    const props = {
      title: 'Newsletters',
      newsletters: lesEchos,
    } satisfies NewsletterSectionProps;

    renderComponent(props);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(lesEchos.length);
  });
});
