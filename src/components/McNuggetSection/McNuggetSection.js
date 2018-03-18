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
    return (
      <Container>
        <ContentContainer>
          <Title>{this.props.first}</Title>
          <Subtitle>{this.props.second}</Subtitle>
          <ModalTrigger
            bgColor="orange"
            modalTransition="scaleUp"
            triggerItem={this.props.triggerItem}
            markupToDisplay={this.props.markupToDisplay}
          />
        </ContentContainer>
        <ImageContainer imgSm={this.props.imgSm}>
          <Image src={this.props.imgSm} />
        </ImageContainer>
      </Container>
    );
  }
}
