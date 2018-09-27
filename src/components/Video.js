import React, { Component } from 'react';
import StyledVideo from '../styles/styledComponents/blocks/styledVideo';

export default class Video extends Component {
  render() {
    return (
      <StyledVideo.RespVideo>
        <iframe
          width="560"
          height="315"
          src={this.props.videoURL}
          frameBorder="0"
          allowFullScreen
        />
      </StyledVideo.RespVideo>
    );
  }
}

