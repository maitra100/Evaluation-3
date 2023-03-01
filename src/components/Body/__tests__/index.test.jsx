import { render } from '@testing-library/react';
import React from 'react';
import Body from '../../Body';

describe('Header', () => {
  it('renders correctly', () => {
    const screen = render(<Body />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
