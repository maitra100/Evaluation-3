import { render } from '@testing-library/react';
import React from 'react';
import Card from '../../Card';

describe('Header', () => {
  it('renders correctly', () => {
    const screen = render(<Card />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
