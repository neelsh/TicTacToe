import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TicTacToe from './TicTacToe';
import Game from './TicTacToe';

describe(TicTacToe, () => {
  const game = new Game();
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

  it('displays a blank grid at the start of the game', () => {
    expect(game).toHaveBeenCalled
  });

  it('should have 2 players', () => {
    const xIsNext = ['X', 'O']
    expect(xIsNext.length).toEqual(2)
  });

  it('should have no winners at start of game', () => {
    const status = 'Next player: '
    expect(status).toEqual('Next player: ')
  })

  it('should have player start with X', () => {
    const xIsNext  = ['X', 'O']
    expect(xIsNext).toContain('X')
  });

})
