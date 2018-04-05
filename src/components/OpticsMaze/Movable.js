import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { move, remove, turnOffLights } from './Game'

import MirrorBottomRight from './MirrorBottomRight';
import MirrorBottomLeft from './MirrorBottomLeft';
import MirrorTopLeft from './MirrorTopLeft';
import MirrorTopRight from './MirrorTopRight';
import LightSource from './LightSource';

const source = {
	beginDrag() {
    turnOffLights()
		return {}
	},

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      switch (dropResult.type) {
        case 'square':
          const oldX = props.x;
          const oldY = props.y;
          const newX = dropResult.x;
          const newY = dropResult.y;
          move(oldX, oldY, newX, newY);
          break;
        case 'garbage':
          remove(props.x, props.y);
          break;
      }
    }
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

@DragSource(ItemTypes.MOVABLE, source, collect)
export default class Movable extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    children: PropTypes.node,
  }
    
  render() {
    const { connectDragSource, isDragging, children } = this.props;
    const style = {
      width: '100%',
      height: '100%',
      cursor: 'move',
      opacity: isDragging ? 0.5 : 1,
      margin: 0
    };

    return connectDragSource(
      <div style={style}>
        {children}
      </div>
    );

  }
}
