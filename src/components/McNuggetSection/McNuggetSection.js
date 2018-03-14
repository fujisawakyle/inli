import React, { Component } from 'react';
import ModalTrigger from '../Modal/ModalTrigger';
import { Container, SmallText, LargeText } from './McNuggetSection.style';

export default class McNuggetSection extends Component {
  state = {};

  render() {
    return (
      <Container background={this.props.background}>
        <div>
          <SmallText>{this.props.first}</SmallText>
          <LargeText>{this.props.second}</LargeText>
          <SmallText>{this.props.third}</SmallText>
          <ModalTrigger
            triggerItem={this.props.triggerItem}
            markupToDisplay={this.props.markupToDisplay}
          />
        </div>
      </Container>
    );
  }
}
