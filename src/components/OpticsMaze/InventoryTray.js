import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InventoryItem from './InventoryItem';
import GarbageBin from './GarbageBin';

export default class InventoryTray extends Component {
  static propTypes = {
  }
  render() {
    //const {isOver, canDrop} = this.props;
    const style={
      //display: 'flex',
      marginTop: 5,
      marginBottom: 5,
      border: 'black solid 2px',
      textAlign: 'center',
    };

    const innerStyle = {
      float: 'left',
      display: 'flex',
    };

    return (
      <div style={style}>
        <div>Click a flashlight to turn it on.</div>
        <div>
          Choose a mirror and drag it onto the maze!
        </div>
        <div style={{display:'inline-block', width:'100%'}}>
          <div style={innerStyle}>
            <InventoryItem val={2} />
            <InventoryItem val={3} />
            <InventoryItem val={4} />
            <InventoryItem val={5} />
            <GarbageBin />
          </div>
        </div>
      </div>
    );
  }
}
