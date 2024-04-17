import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Article, ArticleProps } from './Article';

const renderComponent = (props: ArticleProps) => {
  return render(<Article { ...props } />);
}

describe('Article', () => {
  it('should render a article in the document', () => {
    renderComponent({
      title: 'Something happened',
      description: 'clickbait',
      accessType: 'public',
    });

    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});
