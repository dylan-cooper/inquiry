import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LightBeam extends Component{
  static propTypes = {
    direction: PropTypes.string.isRequired
  }

  render() {
    const { direction } = this.props;
    const lightColor = '#00c0c0';
    const lightLineStyle = {
      stroke: lightColor,
      strokeWidth: 10,
    };

    if (direction == 'vertical') {
      return (
        <svg>
          <line x1={35} y1={-2} x2={35} y2={72} style={lightLineStyle} />
        </svg>
      );
    } else {
      return (
        <svg>
          <line x1={-2} y1={35} x2={72} y2={35} style={lightLineStyle} />
        </svg>
      );
    }
  }
}