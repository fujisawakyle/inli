import React, { Component } from 'react';
import ModalTrigger from '../Modal/ModalTrigger';
import {
  Container,
  ContentContainer,
  ImageContainer,
  Image,
  Title,
  Subtitle,
} from './RonaldSection.style';

import ronaldImgSm from '../../assets/images/campaigns-mcdonalds-website-ronald-small.png';

export default class RonaldSection extends Component {
  state = {};

  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>{this.props.first}</Title>
          <Subtitle>{this.props.second}</Subtitle>
          <ModalTrigger
            modalTransition="scaleUp"
            triggerItem={this.props.triggerItem}
            markupToDisplay={this.props.markupToDisplay}
          />
        </ContentContainer>
        <ImageContainer imgSm={this.props.imgSm}>
          <Image src={ronaldImgSm} />
        </ImageContainer>
      </Container>
    );
  }
}
