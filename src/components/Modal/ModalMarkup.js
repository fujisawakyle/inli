import React from 'react';
import data from '../../data/data.json';
import { ModalManager } from 'react-dynamic-modal';

import {
  FlexCenter,
  FlexColumnToRow,
  FlexColumnToRowFixedHeight,
  FlexColumn,
  DynamicWidth,
  Order1,
  DynamicWidthOrder1,
  Container,
  Title,
  Subtitle,
  ShortHR,
  ConditionsImage,
  ConditionsImageBottomRight,
  ConditionsImageCenter,
  ContentContainer,
  Number,
  Content,
  ImageTitle,
  Description,
  DescriptionCenter
} from './ModalMarkup.style';
import img1Sm from '../../assets/images/campaigns-mcdonalds-website-learnmore-small-1.jpg';
import img1Md from '../../assets/images/campaigns-mcdonalds-website-learnmore-medium-1.jpg';
import img1Lg from '../../assets/images/campaigns-mcdonalds-website-learnmore-large-1.jpg';
import img2Sm from '../../assets/images/campaigns-mcdonalds-website-learnmore-small-2.jpg';
import img2Md from '../../assets/images/campaigns-mcdonalds-website-learnmore-medium-2.jpg';
import img2Lg from '../../assets/images/campaigns-mcdonalds-website-learnmore-large-2.jpg';
import img3Sm from '../../assets/images/campaigns-mcdonalds-website-learnmore-small-3.jpg';
import img3Md from '../../assets/images/campaigns-mcdonalds-website-learnmore-medium-3.jpg';
import img3Lg from '../../assets/images/campaigns-mcdonalds-website-learnmore-large-3.jpg';

import chicks from '../../assets/png/mcnugget/grouping-of-chicks-shadow.png';
import comparison from '../../assets/svg/mcnugget/comparison.svg';
import symptoms from '../../assets/svg/mcnugget/symptoms.svg';
import warehouses from '../../assets/svg/mcnugget/warehouses.svg';
import slaughter from '../../assets/svg/mcnugget/slaughter.svg';
import companies from '../../assets/svg/mcnugget/companies.svg';

import { RedButton } from '../Buttons/Buttons.style';

export const SadTruthMarkup = (
  <FlexCenter>
    <Container>
      <Title>{data.sadTruth.overlayText.title}</Title>
      <ShortHR />
      <p>{data.sadTruth.overlayText.first}</p>
      <p>{data.sadTruth.overlayText.second}</p>

      <ConditionsImage background1={img1Md}>
        <ContentContainer>
          <Number>1</Number>
          <Content>
            <ImageTitle>{data.sadTruth.overlayText.image1.first}</ImageTitle>
            <Description>{data.sadTruth.overlayText.image1.second}</Description>
            <Description>{data.sadTruth.overlayText.image1.third}</Description>
          </Content>
        </ContentContainer>
      </ConditionsImage>
      <ConditionsImageBottomRight background1={img2Sm} background2={img2Lg}>
        <ContentContainer>
          <Number>2</Number>
          <Content>
            <ImageTitle>{data.sadTruth.overlayText.image2.first}</ImageTitle>
            <Description>{data.sadTruth.overlayText.image2.second}</Description>
            <Description>{data.sadTruth.overlayText.image2.third}</Description>
          </Content>
        </ContentContainer>
      </ConditionsImageBottomRight>

      <ConditionsImageCenter background1={img3Sm} background2={img3Md}>
        <ContentContainer>
          <Number>3</Number>
          <Content>
            <ImageTitle>{data.sadTruth.overlayText.image3.first}</ImageTitle>
            <Description>{data.sadTruth.overlayText.image3.second}</Description>
            <Description>{data.sadTruth.overlayText.image3.third}</Description>
          </Content>
        </ContentContainer>
      </ConditionsImageCenter>

      <br />

      <p>{data.sadTruth.overlayText.third}</p>

      <p>{data.sadTruth.overlayText.fourth}</p>
    </Container>
  </FlexCenter>
);

export const McNuggetMarkup = (
  <FlexCenter>
    <Container>
      <Title>{data.mcNugget.overlayText.title}</Title>
      <ShortHR />
      <FlexColumnToRow>
        <Order1 src={chicks} />
        <DynamicWidth src={comparison} />
      </FlexColumnToRow>
      <FlexColumnToRowFixedHeight>
        <FlexColumn>
          <img src={symptoms} />
          <img src={warehouses} />
        </FlexColumn>
        <FlexColumn>
          <DynamicWidthOrder1 src={slaughter} />
          <img src={companies} />
        </FlexColumn>
      </FlexColumnToRowFixedHeight>
    </Container>
  </FlexCenter>
);

export const RonaldMarkup = (
  <FlexCenter>
    <Container>
      <Title>{data.ronald.overlayText.title}</Title>
      <ShortHR />
      <p>pending content</p>
    </Container>
  </FlexCenter>
);

export const MediaMarkup = (
  <FlexCenter>
    <Container>
      <Title>{data.media.overlayText.title}</Title>
      <ShortHR />
      <Subtitle>{data.media.overlayText.first}</Subtitle>
      <RedButton>{data.media.overlayText.button1}</RedButton>
      <br />
      <RedButton>{data.media.overlayText.button2}</RedButton>
      <br />
      <RedButton>{data.media.overlayText.button3}</RedButton>
      <br />
      <DescriptionCenter>
        {data.media.overlayText.second}
        <br />
        {data.media.overlayText.third}
      </DescriptionCenter>
    </Container>
  </FlexCenter>
);
