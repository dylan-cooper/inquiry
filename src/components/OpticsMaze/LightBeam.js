import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { lightColor, mirrorColor } from './Constants'

export default class LightBeam extends Component{
  static propTypes = {
    direction: PropTypes.string.isRequired
  }

  render() {
    const { direction } = this.props;

    const lightLineStyle = {
      stroke: lightColor,
      strokeWidth: 10,
    };

    if (direction == 'vertical') {
      return (
        <svg viewBox="0 0 70 70 ">
          <line x1={35} y1={-2} x2={35} y2={72} style={lightLineStyle} />
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 70 70 ">
          <line x1={-2} y1={35} x2={72} y2={35} style={lightLineStyle} />
        </svg>
      );
    }
  }
}
