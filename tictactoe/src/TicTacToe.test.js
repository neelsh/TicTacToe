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

  it('can simulate a click on a square', () => {
    const boardValues =
    ["X", "O", "O",
    null, "X", null,
    null, null, null];

    const game = mount(
    <Game squares={boardValues}/>
  );
  game.find('button#8').simulate('click');
  expect(game.find('.winner').text()).toEqual("Winner: X");
  })

  it('should allow the winning combination 1', () => {
    const game = mount(<Game squares={[]}/>);

    const board = [
      "X", "X", "X",
      null, "O", "O",
      null, null, null
    ];

    expect(game.instance().calculateWinner(board)).toEqual('X')
  });

  it('should allow the winning combination 2', () => {
    const game = mount(<Game squares={[]}/>);

    const board = [
      null, "O", "O",
      "X", "X", "X",
      null, null, null
    ];

    expect(game.instance().calculateWinner(board)).toEqual('X')
  });

  it('should allow the winning combination 3', () => {
    const game = mount(<Game squares={[]}/>);

    const board = [
      null, null, null,
      null, "O", "O",
      "X", "X", "X"
    ];

    expect(game.instance().calculateWinner(board)).toEqual('X')
  });

  it('should allow the winning combination 4', () => {
    const game = mount(<Game squares={[]}/>);

    const board = [
      "X", null, null,
      "X", "O", "O",
      "X", null, null
    ];

    expect(game.instance().calculateWinner(board)).toEqual('X')
  });

  it('should allow the winning combination 5', () => {
    const game = mount(<Game squares={[]}/>);

    const board = [
      null, "X", null,
      null, "X", "O",
      null, "X", "O"
    ];

    expect(game.instance().calculateWinner(board)).toEqual('X')
  });

  it('should allow the winning combination 6', () => {
    const game = mount(<Game squares={[]}/>);

    const board = [
      null, "O", "X",
      null, "O", "X",
      null, null, "X"
    ];

    expect(game.instance().calculateWinner(board)).toEqual('X')
  });

  it('should allow the winning combination 7', () => {
    const game = mount(<Game squares={[]}/>);

    const board = [
      "X", "O", null,
      null, "X", null,
      null, "O", "X"
    ];

    expect(game.instance().calculateWinner(board)).toEqual('X')
  });

  it('should allow the winning combination 8', () => {
    const game = mount(<Game squares={[]}/>);

    const board = [
      null, "O", "X",
      null, "X", null,
      "X", "O", null
    ];

    expect(game.instance().calculateWinner(board)).toEqual('X')
  });

})
