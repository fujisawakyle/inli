import React from 'react';
import data from '../../data/data.json';
import SVG from 'react-inlinesvg';
import { ModalManager } from 'react-dynamic-modal';

import {
  FlexCenter,
  FlexColumnToRow,
  FlexColumnToRowFixedHeight,
  FlexColumn,
  DynamicWidth,
  Order1,
  DynamicWidthOrder1,
  MobileMarginBottom,
  Container,
  Title,
  TitleNoMarginBottom,
  Subtitle,
  ShortHR,
  Intro,
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

import { RespVideo } from '../HeroVideo/HeroVideo.style';

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
import infographicFile from '../../assets/downloads/truth-behind-mcnuggets-infographic.pdf';
import backgroundFile from '../../assets/downloads/background-info.pdf';

import { RedButton } from '../Buttons/Buttons.style';

export const SadTruthMarkup = (
  <FlexCenter>
    <Container>
      <Title>{data.sadTruth.overlayText.title}</Title>
      <ShortHR />
      <Intro>{data.sadTruth.overlayText.first}</Intro>
      <p>{data.sadTruth.overlayText.second}</p>
      <p>{data.sadTruth.overlayText.third}</p>

      <ConditionsImage background1={img1Md}>
        <ContentContainer>
          <Number>
            <div>1</div>
          </Number>
          <Content>
            <ImageTitle>{data.sadTruth.overlayText.image1.first}</ImageTitle>
            <Description>{data.sadTruth.overlayText.image1.second}</Description>
            <Description>{data.sadTruth.overlayText.image1.third}</Description>
          </Content>
        </ContentContainer>
      </ConditionsImage>
      <ConditionsImageBottomRight background1={img2Sm} background2={img2Lg}>
        <ContentContainer>
          <Number>
            <div>2</div>
          </Number>
          <Content>
            <ImageTitle>{data.sadTruth.overlayText.image2.first}</ImageTitle>
            <Description>{data.sadTruth.overlayText.image2.second}</Description>
            <Description>{data.sadTruth.overlayText.image2.third}</Description>
          </Content>
        </ContentContainer>
      </ConditionsImageBottomRight>

      <ConditionsImageCenter background1={img3Sm} background2={img3Md}>
        <ContentContainer>
          <Number className="number--three">
            <div>3</div>
          </Number>
          <Content>
            <ImageTitle>{data.sadTruth.overlayText.image3.first}</ImageTitle>
            <Description>{data.sadTruth.overlayText.image3.second}</Description>
          </Content>
        </ContentContainer>
      </ConditionsImageCenter>

      <br />

      <p>{data.sadTruth.overlayText.fourth}</p>

      <p>{data.sadTruth.overlayText.fifth}</p>
    </Container>
  </FlexCenter>
);

export const McNuggetMarkup = (
  <FlexCenter>
    <Container className="container--how">
      <TitleNoMarginBottom>
        {data.mcNugget.overlayText.title}
      </TitleNoMarginBottom>
      <Subtitle>{data.mcNugget.overlayText.subtitle}</Subtitle>
      <FlexColumnToRow>
        <Order1>
          <img src={chicks} />
        </Order1>
        <DynamicWidth className="how__graphic">
          <SVG className="comparisonSVG" src={comparison} />
        </DynamicWidth>
      </FlexColumnToRow>
      <FlexColumnToRowFixedHeight>
        <FlexColumn>
          <MobileMarginBottom className="how__graphic how__graphic--symptoms">
            <SVG src={symptoms} />
          </MobileMarginBottom>
          <MobileMarginBottom className="how__graphic">
            <SVG src={warehouses} />
          </MobileMarginBottom>
        </FlexColumn>
        <FlexColumn>
          <DynamicWidthOrder1>
            <MobileMarginBottom className="how__graphic">
              <SVG src={slaughter} />
            </MobileMarginBottom>
          </DynamicWidthOrder1>
          <MobileMarginBottom className="how__graphic how__graphic--companies">
            <SVG src={companies} />
          </MobileMarginBottom>
        </FlexColumn>
      </FlexColumnToRowFixedHeight>
    </Container>
  </FlexCenter>
);

export const RonaldMarkup = (
  <FlexCenter>
    <Container className="container--ronald">
      <Title>{data.ronald.overlayText.title}</Title>
      <ShortHR />
      <RespVideo>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pW8Re3YHfgs?rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </RespVideo>
      <p style={{ textAlign: 'center', width: ' 100%', marginTop: '1em' }}>
        {data.ronald.overlayText.first}
      </p>
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
      <a href={infographicFile} target="_blank">
        <RedButton>{data.media.overlayText.button2}</RedButton>
      </a>
      <br />
      <a href={backgroundFile} target="_blank">
        <RedButton>{data.media.overlayText.button3}</RedButton>
      </a>
      <br />
      <DescriptionCenter>
        {data.media.overlayText.second}
        <br />
        {data.media.overlayText.third}
      </DescriptionCenter>
    </Container>
  </FlexCenter>
);
