import React, { Component } from 'react';
import {
  Container,
  Title,
  Subtitle,
  ImageSmall,
  ImageLarge
} from './WhySection.style';
export default class WhySection extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Subtitle>{this.props.first}</Subtitle>
        <Title>{this.props.second}</Title>
        <ImageSmall src={this.props.imgSm} />
        <ImageLarge src={this.props.imgLg} />
      </Container>
    );
  }
}
