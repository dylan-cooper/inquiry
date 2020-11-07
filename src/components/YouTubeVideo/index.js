import React from 'react'
import IFrame from '../IFrame'

export default class YouTubeVideo extends React.Component {
  static defaultProps = {
    videoid: '',
    width: '640px',
    height: '390px',
  }

  render() {
    const width = this.props.width
    const height = this.props.height
    const url = `https://www.youtube.com/embed/${this.props.videoid}`
    const style = {
      maxWidth: '100%',
    }

    return (
      <span style={{ display: 'block', textAlign: 'center' }}>
        <IFrame
          url={url}
          width={width}
          height={height}
          position="relative"
          display="initial"
          allowFullScreen
        />
      </span>
    )
  }
}
