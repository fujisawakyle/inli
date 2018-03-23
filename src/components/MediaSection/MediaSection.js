import React, { Component } from 'react';
import ModalTrigger from '../Modal/ModalTrigger';
import { Container, Title } from './MediaSection.style';

export default class MediaSection extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Title>{this.props.first}</Title>
        <ModalTrigger
          modalTransition="scaleUp"
          triggerItem={this.props.triggerItem}
          markupToDisplay={this.props.markupToDisplay}
        />
      </Container>
    );
  }
}
