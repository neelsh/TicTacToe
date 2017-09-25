import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TicTacToe from './TicTacToe';
import Grid from './Grid';

describe(TicTacToe, () => {
  const mockAddGrid = jest.fn()
  const component = shallow(
    <TicTacToe />
  )

  it('renders and matches our snapshot', () => {
    const component = renderer.create (
      <TicTacToe />
    )
    const tree = component.toJSON
    expect(tree).toMatchSnapshot();
  });
})
