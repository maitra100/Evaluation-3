import { render } from '@testing-library/react';
import React from 'react';
import Home from '../../Home';

describe('Header', () => {
  it('renders correctly', () => {
    const screen = render(<Home />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
