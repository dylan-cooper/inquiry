import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Board from './Board';
import InventoryTray from './InventoryTray';
import { observe } from './Game';


@DragDropContext(HTML5Backend)
export default class ChessboardTutorialApp extends Component {
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
		const { board } = this.state;
    const height = (70 * 8) + 4;
    const width = (70 * 8) + 4;
    const style = {
      width,
      height,
      border: '2px solid black',
      margin: 'auto',
    };

		return (
			<div>
				<div style={style} >
					<Board board={board} />
          <InventoryTray />
				</div>
			</div>
		);
	}
}
