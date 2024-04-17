import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Article, ArticleProps } from './Article';

const renderComponent = (props: ArticleProps) => {
  return render(<Article { ...props } />);
}

describe('Article', () => {
  it('should render an article in the document', () => {
    const props = {
      title: 'technical test',
      description: 'react test',
      note: 'clickbait',
      accessType: 'public',
    } satisfies ArticleProps;

    renderComponent(props);

    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.note)).toBeInTheDocument();
  });

  describe('when accessType is public', () => {
    it('should not render a button', () => {
      const props = {
        title: 'Something happened',
        description: 'clickbait',
        accessType: 'public',
      } satisfies ArticleProps;

      renderComponent(props);

      const article = screen.queryByRole('button');
      expect(article).not.toBeInTheDocument();
    });
  });

  describe('when accessType is register', () => {
    it('should render a button', () => {
      const props = {
        title: 'Something happened',
        description: 'clickbait',
        accessType: 'register',
      } satisfies ArticleProps;

      renderComponent(props);

      const article = screen.queryByRole('button');
      expect(article).toBeInTheDocument();
    });
  });

  describe('when accessType is subscription', () => {
    it('should render a button', () => {
      const props = {
        title: 'Something happened',
        description: 'clickbait',
        accessType: 'subscription',
      } satisfies ArticleProps;

      renderComponent(props);

      const article = screen.queryByRole('button');
      expect(article).toBeInTheDocument();
    });
  });
});
