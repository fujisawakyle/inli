import React, { Component } from 'react';
import ModalTrigger from '../Modal/ModalTrigger';
import {
  Container,
  ContentContainer,
  ImageContainer,
  Image,
  Title,
  Subtitle
} from './McNuggetSection.style';

import mcNuggetImg from '../../assets/images/campaigns-mcdonalds-website-chicken-nugget-small.png';

export default class McNuggetSection extends Component {
  state = {};

  render() {
    let markup;
    if (typeof window !== 'undefined') {
      if (document.documentElement.clientWidth < 420) {
        markup = this.props.markupToDisplay;
      } else {
        markup = this.props.markupToDisplay2;
      }
    }
    return (
      <Container>
        <ContentContainer>
          <Title>{this.props.first}</Title>
          <Subtitle>{this.props.second}</Subtitle>
          <ModalTrigger
            eventName={this.props.eventName}
            bgColor="rgba(255,44,60,0.9)"
            modalTransition="scaleUp"
            triggerItem={this.props.triggerItem}
            markupToDisplay={markup}
          />
        </ContentContainer>
        <ImageContainer imgSm={this.props.imgSm}>
          <Image src={this.props.imgSm} />
        </ImageContainer>
      </Container>
    );
  }
}
