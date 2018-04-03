import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoardSquare from './BoardSquare'
import Movable from './Movable'
import './Board.css'

export default class Board extends Component {
    static propTypes = {
      board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired).isRequired).isRequired,
    }

    renderSquare(i) {
      const x = i % 8;
      const y = Math.floor(i / 8);
      const val = this.props.board[x][y];

      return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
          <BoardSquare x={x} y={y} val={val} />
        </div>
      );
    }

    renderPiece(x, y) {
      return null;
    }

    render() {
      const squares = []
        for (let i = 0; i < 64; i += 1) {
          squares.push(this.renderSquare(i))
        }

      return <div className="Board">{squares}</div>
    }
  }
