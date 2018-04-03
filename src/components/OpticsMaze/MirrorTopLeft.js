import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MirrorTopLeft extends Component {
  static propTypes = {
    withLight: PropTypes.bool.isRequired
  }

  render() {
    const { withLight } = this.props;

    const mirrorColor = '#c0c0c0';
    const lightColor = '#00c0c0';

    const lightLineStyle = {
      stroke: lightColor,
      strokeWidth: 10,
    };

    var trianglePoints = '0,70 70,0 0,0';

    if (this.props.withLight) {
      return (
        <g>
        <line x1={72} y1={35} x2={35} y2={35} style={lightLineStyle}/>
        <line x1={35} y1={72} x2={35} y2={35} style={lightLineStyle}/>
        <polygon fill={mirrorColor} points={trianglePoints} />
        </g>
      );
    } else {
      return (
        <polygon fill={mirrorColor} points={trianglePoints} />
      );
    }

    
  }
}