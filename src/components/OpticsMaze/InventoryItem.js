import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { add } from './Game';

import MirrorBottomRight from './MirrorBottomRight';
import MirrorBottomLeft from './MirrorBottomLeft';
import MirrorTopLeft from './MirrorTopLeft';
import MirrorTopRight from './MirrorTopRight';

const source = {
  beginDrag() {
    return {}
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      add(props.val, dropResult.x, dropResult.y);
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

@DragSource(ItemTypes.MOVABLE, source, collect)
export default class InventoryItem extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    val: PropTypes.number.isRequired,
  }

  render() {
    const { connectDragSource, isDragging, val } = this.props;
    const style = {
      width: '70px',
      height: '70px',
      cursor: 'move',
      opacity: isDragging ? 0.5 : 1,
      margin: 0
    };

    const lineStyle = {
      stroke: '#c0c0c0',
      strokeWidth: 5,
    };
    //const img = this.getImage();
    var svg = null;

    if (val == 2) {
      svg = (
        <svg style={style}>      
          <MirrorBottomRight withLight={false}/>
        </svg>
      );
    } else if (val == 3) {
      svg = (
        <svg style={style}>
          <MirrorTopLeft withLight={false} />
        </svg>
      );
    } else if (val == 4) {
      svg = (
        <svg style={style}>
          <MirrorBottomLeft withLight={false} />
        </svg>
      );
    } else if (val == 5) {
      svg = (
        <svg style={style}>
          <MirrorTopRight withLight={false} />
        </svg>
      );
    }
    
    return connectDragSource(
      <div style={style}>
        {svg}
      </div>
    );
  }
}
