import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div class = "game">
        <span>Tic Tac Toe</span>
        <div class = "row">
          <div data-i={0} data-j={0} class = "col"></div>
          <div data-i={0} data-j={1} class = "col"></div>
          <div data-i={0} data-j={2} class = "col"></div>
        </div>
        <div class = "row">
          <div data-i={1} data-j={0} class = "col"></div>
          <div data-i={1} data-j={1} class = "col"></div>
          <div data-i={1} data-j={2} class = "col"></div>
        </div>
        <div class = "row">
          <div data-i={2} data-j={0} class = "col"></div>
          <div data-i={2} data-j={1} class = "col"></div>
          <div data-i={2} data-j={2} class = "col"></div>
        </div>
          <button id = "choose" class = "O">O</button>
          <button id = "restart">Choose</button>
          <button id = "choose" class = "X">X</button>
      </div>
    )
  }
}


export default Grid;
