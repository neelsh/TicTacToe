import React from 'react';
import './TicTacToe.css';


export class Square extends React.Component {
  render() {
    return (
      <button className="square" id={this.props.index} onClick={() => this.props.onClick()}>
        { this.props.value }
      </button>
    );
  }
}

export class Board extends React.Component {

  renderSquare(i) {
    return <Square
    value={this.props.squares[i]}
    onClick={() => this.props.handleClick(i)}
    index={i}
    />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


class Game extends React.Component {
  constructor(props) {
    super();
    this.state = {
      whoMoves: "X",
      squares: props.squares,
      winner: null
    };
  }

  handleClick(i) {
    if (this.state.winner) {
      this.setState({errorMessage: "Game finished"});
      return
    }

    const newSquares = this.state.squares.slice();
    const currentPlayer = this.state.whoMoves;
    newSquares[i] = currentPlayer;
    const nextPlayer = (currentPlayer === "X") ? "O" : "X";

    const winner = this.calculateWinner(newSquares);

    if (this.state.winner !== winner && winner !== null) {
      this.roundFinished(winner);
    }
    this.setState({squares: newSquares, whoMoves: nextPlayer});
  }


  roundFinished(winner) {

    this.setState({
      winner: winner
    })
  }

  nextRound() {
    this.setState({
      squares: Array(9).fill(null),
      errorMessage: null,
      winner: null
    })
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {

    let {whoMoves, squares, errorMessage, winner} = this.state

    return (
      <div className="game">
        <div className="round">
          <div className="messages">
            <div className="winner">Winner: {winner}</div>
            <div className="nextPlayer">Next player: {whoMoves}</div>
          </div>
          <div className="game-board">
            <Board squares={squares} handleClick={(i)=> this.handleClick(i)}/>
          </div>
        </div>
      </div>
    );
  }
}
Game.defaultProps = { squares: Array(9).fill(null) };


export default Game;
