import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InventoryItem from './InventoryItem';

export default class InventoryTray extends Component {
  static propTypes = {
    withLight: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div>
        <InventoryItem val={2} />
        <InventoryItem val={3} />
        <InventoryItem val={4} />
        <InventoryItem val={5} />
      </div>
    );
  }
}
