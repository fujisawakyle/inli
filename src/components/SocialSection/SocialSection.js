import React, { Component } from 'react';
import {
  Container,
  Title,
  ShortHR,
  TwitterContainer
} from './SocialSection.style';
export default class WhySection extends Component {
  state = {};

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <Container>
        <Title>{this.props.first}</Title>
        <ShortHR />
        <TwitterContainer>
          <a
            className="twitter-timeline"
            data-height="500"
            data-chrome="noheader nofooter"
            data-dnt="true"
            data-theme="dark"
            data-link-color="#bf2026"
            href="https://twitter.com/plshelpchickens"
          />
        </TwitterContainer>
      </Container>
    );
  }
}
