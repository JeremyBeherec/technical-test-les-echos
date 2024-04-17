import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { lesEchos, investments } from '~/data/newsletters';

import { Router } from './Router';

const renderComponent = () => {
  return render(<Router />);
}

describe('Router', () => {
  it('should render without crashing', () => {
    renderComponent();
  });
});
