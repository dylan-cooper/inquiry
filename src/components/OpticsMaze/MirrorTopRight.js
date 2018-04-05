import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MirrorTopRight extends Component {
  static propTypes = {
    withLight: PropTypes.bool
  }

  render() {
    const { withLight } = this.props;

    const mirrorColor = '#c0c0c0';
    const lightColor = '#00c0c0';

    const lightLineStyle = {
      stroke: lightColor,
      strokeWidth: 10,
    };

    var trianglePoints = '70,0 70,70 0,0';

    if (this.props.withLight) {
      return (
        <svg>
        <g>
          <line x1={35} y1={72} x2={35} y2={35} style={lightLineStyle}/>
          <line x1={-2} y1={35} x2={35} y2={35} style={lightLineStyle}/>
          <polygon fill={mirrorColor} points={trianglePoints} />
        </g>
        </svg>
      );
    } else {
      return (
        <svg>
        <polygon fill={mirrorColor} points={trianglePoints} />
        </svg>
      );
    }

    
  }
}
