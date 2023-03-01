import { render } from '@testing-library/react';
import React from 'react';
import Header from '../../Header';

describe('Header', () => {
  it('renders correctly', () => {
    const navigate = jest.fn();
    const screen = render(<Header />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
