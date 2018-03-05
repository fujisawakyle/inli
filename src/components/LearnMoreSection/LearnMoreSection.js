import React, { Component } from 'react';
import ModalTrigger from '../Modal/ModalTrigger';
import { Container, SmallText, LargeText } from './LearnMoreSection.style';

export default class LearnMoreSection extends Component {
  state = {};

  render() {
    return (
      <Container background={this.props.background}>
        <div>
          <SmallText>{this.props.first}</SmallText>
          <LargeText>{this.props.second}</LargeText>
          <SmallText>{this.props.third}</SmallText>
          <ModalTrigger
            buttonText={this.props.buttonText}
            text={this.props.text}
          />
        </div>
      </Container>
    );
  }
}
