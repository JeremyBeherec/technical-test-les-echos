import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Header, HeaderProps } from './Header';

const renderComponent = (props: HeaderProps) => {
  return render(<Header { ...props } />);
}

describe('Header', () => {
  it('should render the header', () => {
    const props = {
      title: 'Newsletters',
      description: 'something something',
    } satisfies HeaderProps;

    renderComponent(props);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
