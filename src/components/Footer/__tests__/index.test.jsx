import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../../Footer';

describe('Header', () => {
  it('renders correctly', () => {
    const screen = render(<Footer />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
