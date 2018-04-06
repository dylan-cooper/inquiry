import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import Square from './Square'
import ItemTypes from './ItemTypes'
import Movable from './Movable';

import MirrorBottomRight from './MirrorBottomRight';
import MirrorBottomLeft from './MirrorBottomLeft';
import MirrorTopLeft from './MirrorTopLeft';
import MirrorTopRight from './MirrorTopRight';
import LightSource from './LightSource';
import LightBeam from './LightBeam';
import LightFilter from './LightFilter';

const squareTarget = {
	canDrop(props) {
    return props.val == 0 || props.val == 10 || props.val == 11;
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

    const style = {
      position: 'relative',
      width: '100%',
      height: '100%',
    };

    const lightFilterStart = 40;

    var black = false;
    var child = null;
    switch(val) {
      case 1:
        black = true;
        break;
      case 2:
        child = (<Movable x={x} y={y}><MirrorBottomRight /></Movable>)
        break;
      case 3:
        child = (<Movable x={x} y={y}><MirrorTopLeft /></Movable>)
        break;
      case 4:
        child = (<Movable x={x} y={y}><MirrorBottomLeft /></Movable>)
        break;
      case 5:
        child = (<Movable x={x} y={y}><MirrorTopRight /></Movable>)
        break;
      case 6:
        child = (<LightSource x={x} y={y} direction="down" />)
        break;
      case 7:
        child = (<LightSource x={x} y={y} direction="up" />)
        break;
      case 8:
        child = (<LightSource x={x} y={y} direction="right" />)
        break;
      case 9:
        child = (<LightSource x={x} y={y} direction="left" />)
        break;
      case 10:
        child = (<LightBeam direction="vertical" />)
        break;
      case 11:
        child = (<LightBeam direction="horizontal" />)
        break;
      case 12:
        child = (<Movable x={x} y={y}><MirrorBottomRight withLight/></Movable>)
        break;
      case 13:
        child = (<Movable x={x} y={y}><MirrorTopLeft withLight/></Movable>)
        break;
      case 14:
        child = (<Movable x={x} y={y}><MirrorBottomLeft withLight/></Movable>)
        break;
      case 15:
        child = (<Movable x={x} y={y}><MirrorTopRight withLight/></Movable>)
        break;
      case lightFilterStart:
        child = (<Movable x={x} y={y}><LightFilter direction="vertical" color="#f00" /></Movable>)
        break;
      case lightFilterStart + 1:
        child = (<Movable x={x} y={y}><LightFilter direction="horizontal" color="#f00" /></Movable>)
        break;
      case lightFilterStart + 2:
        child = (<Movable x={x} y={y}><LightFilter direction="vertical" color="#0f0" /></Movable>)
        break;
      case lightFilterStart + 3:
        child = (<Movable x={x} y={y}><LightFilter direction="horizontal" color="#0f0" /></Movable>)
        break;
      case lightFilterStart + 4:
        child = (<Movable x={x} y={y}><LightFilter direction="vertical" color="#00f" /></Movable>)
        break;
      case lightFilterStart + 5:
        child = (<Movable x={x} y={y}><LightFilter direction="horizontal" color="#00f" /></Movable>)
        break;
    
    
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
