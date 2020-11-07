import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Question extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    const { question, options } = this.props

    const optionTags = options.map((o, i) => <div key={'option-' + i}>{o}</div>)

    return (
      <div>
        <div>{question}</div>
        <div>{optionTags}</div>
      </div>
    )
  }
}
