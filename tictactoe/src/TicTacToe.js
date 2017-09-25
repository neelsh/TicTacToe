import React, { Component } from 'react';
import './TicTacToe.css';
import Grid from './Grid';


class TicTacToe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="TicTacToe">
        <h2>Welcome to TicTacToe</h2>
      </div>
    );
  }

  renderGrid() {
    return (
      <div>
        <Grid />
      </div>
    )
  }
}

export default TicTacToe;
