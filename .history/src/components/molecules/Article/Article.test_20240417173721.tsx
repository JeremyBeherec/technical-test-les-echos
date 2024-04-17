import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Article, ArticleProps } from './Article';

const renderComponent = (props: ArticleProps) => {
  return render(<Article { ...props } />);
}

describe('Article', () => {
  it('should render an article in the document', () => {
    renderComponent({
      title: 'Something happened',
      description: 'clickbait',
      accessType: 'public',
    });

    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });

  describe('when accessType is public', () => {
    it('should not render a button', () => {
      renderComponent({
        title: 'Something happened',
        description: 'clickbait',
        accessType: 'public',
      });

      const article = screen.queryByRole('button');
      expect(article).not.toBeInTheDocument();
    });
  });
});
