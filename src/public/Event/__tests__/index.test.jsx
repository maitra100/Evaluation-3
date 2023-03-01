import { render } from '@testing-library/react';
import React from 'react';
import Event from '../../Event';

describe('Header', () => {
  it('renders correctly', () => {
    const screen = render(<Event />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
