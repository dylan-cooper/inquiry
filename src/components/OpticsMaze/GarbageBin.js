import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const garbageTarget = {
  canDrop() {
    return true;
  },

  drop(props) {
    return { type: 'garbage' };
  }
}

function collect(connect, monitor) {
  return { 
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

@DropTarget(ItemTypes.MOVABLE, garbageTarget, collect)
export default class GarbageBin extends Component {

  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;
    const style = {
      maxWidth: 70,
      maxHeight: 70,
      height: '100%',
      width: '100%',
      margin: 2,
    };

    var binColor = 'grey';
    var capColor = 'black';
    var lineColor = 'black';
    if (isOver && canDrop) {
      binColor = '#23A24D';
      capColor = '#33636C';
      lineColor = '#61B872';
    } else if (!isOver && canDrop) {
      binColor = '#FF8200';
      capColor = '#b65B00';
      lineColor = '#FFB491';
    }      

    const binStyle = {
      fill: binColor,
    };

    const capHandleStyle = {
      fill: 'none',
      stroke: capColor,
      strokeWidth: 2,
      strokeMiterlimit: 10
    };

    const capStyle = {
      fill: 'none',
      stroke: capColor,
      strokeWidth: 2,
      strokeMiterlimit: 10,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    };

    const lineStyle = {
      fill: 'none',
      stroke: lineColor,
      strokeWidth: 2,
      strokeMiterlimit: 10,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    };

    return connectDropTarget(
      <div style={style}>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 58 58" style={{enableBackground:"new 0 0 58 58"}}>
          <path style={binStyle} d="M49,7l-1.956,47c0,0-0.085,4-3.908,4H28.54h-0.059H14.864c-3.823,0-3.908-4-3.908-4L9,7"/>
          <path style={capHandleStyle} d="M36.999,7c0,0,0.156-6-4-6h-5.061h0.122H23 c-4.156,0-4,6-4,6"/>
          <line style={lineStyle} x1="19" y1="17" x2="19" y2="50"/>
          <line style={lineStyle} x1="29" y1="17" x2="29" y2="50"/>
          <line style={lineStyle} x1="39" y1="17" x2="39" y2="50"/>
          <line style={capStyle} x1="6" y1="7" x2="52" y2="7"/>
        </svg>
      </div>
    );
  }
}

