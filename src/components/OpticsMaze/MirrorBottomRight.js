import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { lightColor, mirrorColor } from './Constants'

export default class MirrorBottomRight extends Component {
  static propTypes = {
    withLight: PropTypes.bool,
  }

  render() {
    const { withLight } = this.props

    const lightLineStyle = {
      stroke: lightColor,
      strokeWidth: 10,
    }

    var trianglePoints = '0,70 70,0 70,70'

    if (this.props.withLight) {
      return (
        <svg viewBox="0 0 70 70 ">
          <g>
            <line x1={-2} y1={35} x2={35} y2={35} style={lightLineStyle} />
            <line x1={35} y1={-2} x2={35} y2={35} style={lightLineStyle} />
            <polygon fill={mirrorColor} points={trianglePoints} />
          </g>
        </svg>
      )
    } else {
      return (
        <svg viewBox="0 0 70 70 ">
          <polygon fill={mirrorColor} points={trianglePoints} />
        </svg>
      )
    }
  }
}
