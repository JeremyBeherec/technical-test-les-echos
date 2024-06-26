import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { lesEchos, investments } from '~/data/newsletters';

import { Newsletters } from './Newsletters';

const renderComponent = () => {
  return render(<Newsletters />);
}

describe('Newsletters', () => {
  it('should render all the newsletters from data', () => {
    renderComponent();

    expect(screen.getAllByRole('article')).toHaveLength(lesEchos.length + investments.length);
  });
});
