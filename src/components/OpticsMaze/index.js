import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import isMobile from 'is-mobile'
import Board from './Board'
import InventoryTray from './InventoryTray'
import { observe } from './Game'

var backend = isMobile() ? TouchBackend : HTML5Backend

export default class OpticsMaze extends Component {
  constructor(props) {
    super(props)
    this.unobserve = observe(this.handleChange.bind(this))
  }

  handleChange(board) {
    const nextState = { board }
    if (this.state) {
      this.setState(nextState)
    } else {
      this.state = nextState
    }
  }

  componentWillUnmount() {
    this.unobserve()
  }

  render() {
    const { board } = this.state
    //    const height = (100 * 8) + 4;
    //    const width = (100 * 8) + 4;
    const width = '60vw'
    const height = width
    const style = {
      //width,
      //height,
      border: '2px solid black',
      margin: 'auto',
    }

    return (
      <DndProvider backend={backend}>
        <div>
          <div className={'BoardWrapper'} style={style}>
            <Board board={board} />
          </div>
          <div>
            <InventoryTray />
          </div>
        </div>
      </DndProvider>
    )
  }
}
