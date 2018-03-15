import React, { Component } from 'react';
import ModalTrigger from '../Modal/ModalTrigger';
import {
  Container,
  DarkOpaqueFilter,
  SmallText,
  LargeText
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
        <LargeText>{this.props.first}</LargeText>
        <SmallText>{this.props.second}</SmallText>

        <ModalTrigger
          modalTransition="scaleUp"
          triggerItem={this.props.triggerItem}
          markupToDisplay={this.props.markupToDisplay}
        />
      </Container>
    );
  }
}
