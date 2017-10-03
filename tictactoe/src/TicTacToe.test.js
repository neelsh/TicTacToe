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

  it('should allow the winning combination 1', () => {
    const boardValues =
    ["X", "X", null,
    null, "O", "O",
    null, null, null];

    const game = mount(
      <Game squares={boardValues}/>
    );
    game.find('button#2').simulate('click');
     expect(game.find('.winner').text()).toEqual("Winner: X");
  });

  it('should allow the winning combination 2', () => {
    const boardValues =
    ["O", "O", null,
    "X", "X", null,
    null, null, null];

    const game = mount(
      <Game squares={boardValues}/>
    );
    game.find('button#5').simulate('click');
     expect(game.find('.winner').text()).toEqual("Winner: X");
  });

  it('should allow the winning combination 3', () => {
    const boardValues =
    ["O", "O", null,
    null, null, null,
    "X", "X", null];

    const game = mount(
      <Game squares={boardValues}/>
    );
    game.find('button#8').simulate('click');
     expect(game.find('.winner').text()).toEqual("Winner: X");
  });

  it('should allow the winning combination 4', () => {
    const boardValues =
    ["X", "O", null,
    "X", null, null,
    null, "O", null];

    const game = mount(
      <Game squares={boardValues}/>
    );
    game.find('button#6').simulate('click');
     expect(game.find('.winner').text()).toEqual("Winner: X");
  });

  it('should allow the winning combination 5', () => {
    const boardValues =
    ["O", "X", null,
    "O", "X", null,
    null, null, null];

    const game = mount(
      <Game squares={boardValues}/>
    );
    game.find('button#7').simulate('click');
     expect(game.find('.winner').text()).toEqual("Winner: X");
  });

  it('should allow the winning combination 6', () => {
    const boardValues =
    [null, "O", "X",
    null, "O", "X",
    null, null, null];

    const game = mount(
      <Game squares={boardValues}/>
    );
    game.find('button#8').simulate('click');
     expect(game.find('.winner').text()).toEqual("Winner: X");
  });

  it('should allow the winning combination 7', () => {
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

  it('should allow the winning combination 8', () => {
    const boardValues =
    ["O", "O", "X",
    null, "X", null,
    null, null, null];

    const game = mount(
      <Game squares={boardValues}/>
    );
    game.find('button#6').simulate('click');
     expect(game.find('.winner').text()).toEqual("Winner: X");
  });

})
