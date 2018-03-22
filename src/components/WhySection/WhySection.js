import React, { Component } from 'react';
import {
  Container,
  Title,
  Subtitle,
  ImageSmall,
  ImageLarge,
  DynamicImage
} from './WhySection.style';
export default class WhySection extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Subtitle>{this.props.first}</Subtitle>
        <Title>{this.props.second}</Title>
        {/* <picture alt="company logos">
          <source
            style={{ height: '200px', width: '100%' }}
            src={this.props.imgSm}
          />
          <source src={this.props.imgLg} media="(min-width: 400px)" />
        </picture> */}
        <ImageSmall src={this.props.imgSm} />
        <ImageLarge src={this.props.imgLg} />
        {/* <DynamicImage imgSm={this.props.imgSm} imgLg={this.props.imgLg} /> */}
      </Container>
    );
  }
}
