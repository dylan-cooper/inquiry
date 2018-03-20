import React from 'react';
import Iframe from 'react-iframe';

export default class YouTubeVideo extends React.Component {
    static defaultProps = {
        videoid: '',
        width: '640px',
        height: '390px',
    };

    render() {
        const width = this.props.width
        const height = this.props.height
        const url = `https://www.youtube.com/embed/${this.props.videoid}`

        return (
            <span style={{display: 'block', textAlign: 'center'}}>
                <Iframe url={url} width={width} height={height} position="relative" display="initial" allowFullScreen/>
            </span>
        );
    }
}
