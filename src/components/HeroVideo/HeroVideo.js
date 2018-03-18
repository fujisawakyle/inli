import React, { Component } from 'react';
import { Container, RespVideo } from './HeroVideo.style';

export default class HeroVideo extends Component {
  state = {};

  render() {
    return (
      <Container>
        <RespVideo>
          <iframe
            width="560"
            height="315"
            src={this.props.videoURL}
            frameBorder="0"
            allowFullScreen
          />
        </RespVideo>
      </Container>
    );
  }
}
