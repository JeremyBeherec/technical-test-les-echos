import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { Router } from './Router';

const renderComponent = () => {
  return render(<Router />);
}

describe('Router', () => {
  it('should render without crashing', () => {
    renderComponent();
  });
});
