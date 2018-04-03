import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Square extends Component {
	  static propTypes = {
		    black: PropTypes.bool,
		    children: PropTypes.node,
	  }

	  render() {
		    const { black } = this.props
		    const backgroundColor = black ? 'black' : null 

        const style = {
          backgroundColor,
          width: '100%',
          height: '100%',
        };

		    return (
            <div style={style} >
                {this.props.children}
			      </div>
		    )
	  }
}
