import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import Game, { Square, Board } from './TicTacToe';

describe('TicTacToe game', () => {

  it('tests square value gets rendered', () => {
    const square = shallow(
      <Square />
    )
    expect(square.text()).toEqual('')
  });

  it('calls the click action when square is clicked on', () => {
    const onClickAction = sinon.spy();
    const square = shallow(
      <Square value="" onClick={onClickAction}/>
    );
    square.find('button').simulate('click');
    expect(onClickAction.calledOnce).toEqual(true);
  });

  it('displays 3 squares per row on the Board', () => {
    const board = shallow(
    <Board squares={ Array(9).fill(null)} />
    );
    expect(board.find('.board-row').length).toEqual(3);
  });

  it('has 9 quares on the board', () => {
    const board = mount(
    <Board squares={ Array(9).fill(null)} />
    );
    expect(board.find('.square').length).toEqual(9);
  });

  it('first player is X and next player is O', () => {
    const game = mount(
    <Game />
    );
    game.find('button#0').simulate('click');
    expect(game.find('button#0').text()).toEqual('X');
    expect(game.find('.nextPlayer').text()).toEqual("Next player: O");
  });

  it('allows a player to win a game', () => {
    const boardValues =
    ["X", "O", "O",
    null, "X", null,
    null, null, null];

    const game = mount(
      <Game squares={boardValues}/>
    );
    game.find('button#8').simulate('click');
     expect(game.find('.winner').text()).toEqual("Winner: X");
  });

  it('should only allow the winning lines', () => {
    const boardValues = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const component = mount(
      <Game lines={boardValues} />
    );
    expect(component.find('lines').Array).toEqual(boardValues)
  })

})
