import React, { Component } from 'react';
import ModalTrigger from '../Modal/ModalTrigger';
import {
  Container,
  DarkOpaqueFilter,
  Title,
  Subtitle
} from './SadTruthSection.style';

export default class SadTruthSection extends Component {
  state = {};

  render() {
    return (
      <Container
        backgroundSm={this.props.backgroundSm}
        backgroundLg={this.props.backgroundLg}
      >
        <DarkOpaqueFilter />
        <Title>{this.props.first}</Title>
        <Subtitle>{this.props.second}</Subtitle>

        <ModalTrigger
          modalTransition="scaleUp"
          triggerItem={this.props.triggerItem}
          markupToDisplay={this.props.markupToDisplay}
        />
      </Container>
    );
  }
}
