import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoardSquare from './BoardSquare'
import Movable from './Movable'
import './Board.css'

export default class Board extends Component {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
    ).isRequired,
  }

  renderSquare(i, size) {
    const x = i % size
    const y = Math.floor(i / size)
    const val = this.props.board[x][y]

    const percentage = 100 / size + '%'

    return (
      <div key={i} style={{ width: percentage, height: percentage }}>
        <BoardSquare x={x} y={y} val={val} />
      </div>
    )
  }

  renderPiece(x, y) {
    return null
  }

  render() {
    const squares = []
    // assume it's a square
    const size = this.props.board.length

    for (let i = 0; i < size * size; i += 1) {
      squares.push(this.renderSquare(i, size))
    }

    return <div className="Board">{squares}</div>
  }
}
