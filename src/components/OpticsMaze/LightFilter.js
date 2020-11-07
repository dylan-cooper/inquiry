import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { lightColor } from './Constants'

export default class LightFilter extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    withLight: PropTypes.bool,
    direction: PropTypes.string.isRequired,
  }

  render() {
    const { color, direction, withLight } = this.props

    const lightLineStyle = {
      stroke: lightColor,
      strokeWidth: 10,
    }

    const filterLineStyle = {
      stroke: color,
      strokeWidth: 5,
    }

    if (direction == 'vertical') {
      return (
        <svg viewBox="0 0 70 70 ">
          <line x1={35} y1={-2} x2={35} y2={72} style={filterLineStyle} />
        </svg>
      )
    } else {
      return (
        <svg viewBox="0 0 70 70 ">
          <line x1={-2} y1={35} x2={72} y2={35} style={filterLineStyle} />
        </svg>
      )
    }
  }
}
