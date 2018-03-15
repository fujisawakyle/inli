import React, { Component } from 'react';
import ModalTrigger from '../Modal/ModalTrigger';
import { Container, SmallText, LargeText } from './SadTruthSection.style';

export default class SadTruthSection extends Component {
  state = {};

  render() {
    return (
      <Container background={this.props.background}>
        <div>
          <SmallText>{this.props.first}</SmallText>
          <LargeText>{this.props.second}</LargeText>
          <SmallText>{this.props.third}</SmallText>
          <ModalTrigger
            modalTransition="scaleUp"
            triggerItem={this.props.triggerItem}
            markupToDisplay={this.props.markupToDisplay}
          />
        </div>
      </Container>
    );
  }
}
