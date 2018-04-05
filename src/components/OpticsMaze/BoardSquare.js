import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import Square from './Square'
import ItemTypes from './ItemTypes'
import Movable from './Movable';

const squareTarget = {
	canDrop(props) {
    return props.val == 0;
	},

	drop(props) {
    return { type: 'square', x: props.x, y: props.y };
	},

}

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}
}

@DropTarget([ItemTypes.MOVABLE, ItemTypes.INVENTORY], squareTarget, collect)
export default class BoardSquare extends Component {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
    val: PropTypes.number.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
		connectDropTarget: PropTypes.func.isRequired,
	}

	renderOverlay(color) {
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 1,
      opacity: 0.5,
      backgroundColor: color,
    };

		return (
			<div style={style} />
		)
	}

	render() {
		const { x, y, val, connectDropTarget, isOver, canDrop } = this.props;
		const black = val == 1;

    const style = {
      position: 'relative',
      width: '100%',
      height: '100%',
    };

    var child = null;
    if (val >= 2) {
      child = (<Movable val={val} x={x} y={y}/>);
    }

		return connectDropTarget(
			<div style={style}>
				<Square black={black}>{child}</Square>
				{isOver && !canDrop && this.renderOverlay('red')}
				{isOver && canDrop && this.renderOverlay('green')}
			</div>,
		);
	}
}
