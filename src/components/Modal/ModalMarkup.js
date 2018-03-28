import React from 'react';
import data from '../../data/data.json';
import SVG from 'react-inlinesvg';
import Carousel from 'nuka-carousel';
import { ModalManager } from 'react-dynamic-modal';
import decorators from '../ActionsBar/decorators';
import decoratorsVertical from '../ActionsBar/decoratorsVertical';

import {
  FlexCenter,
  FlexColumnToRow,
  FlexColumnToRowFixedHeight,
  FlexColumn,
  FlexContainer,
  FlexChild,
  FlexRow,
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
  DescriptionCenter,
  VideoList,
  VideoListItem,
  WhiteBoldText,
  YellowBoldText,
  YellowSmallBoldText,
  WhiteSmallText,
  TriColumn,
  BiColumn,
  BulletContainer,
  Bullet,
  SymptomIcon
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
import symptom1 from '../../assets/svg/mcnugget/symptom-1.svg';
import symptom2 from '../../assets/svg/mcnugget/symptom-2.svg';
import symptom3 from '../../assets/svg/mcnugget/symptom-3.svg';
import warehouses from '../../assets/svg/mcnugget/warehouses.svg';
import warehousesBullet1 from '../../assets/svg/mcnugget/warehouseBullet1.svg';
import warehousesBullet2 from '../../assets/svg/mcnugget/warehouseBullet2.svg';
import warehousesBullet3 from '../../assets/svg/mcnugget/warehouseBullet3.svg';
import warehousesBullet4 from '../../assets/svg/mcnugget/warehouseBullet4.svg';
import slaughter from '../../assets/svg/mcnugget/slaughter.svg';
import companies from '../../assets/svg/mcnugget/companies.svg';
import infographicFile from '../../assets/downloads/truth-behind-mcnuggets-infographic.pdf';
import backgroundFile from '../../assets/downloads/background-info.pdf';
import pressReleaseFile from '../../assets/downloads/release-mcdonalds-broilercampaign.pdf';

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

const Slide1 = (
  <FlexContainer className="flex__child how__graphic how__graphic--chicks">
    <img src={chicks} />
  </FlexContainer>
);
const Slide2 = (
  <FlexContainer className="how__graphic how__graphic--comparision">
    <FlexRow className="how__graphic--comparision">
      <BiColumn>
        <SVG className="comparisonSVG" src={comparison} />
      </BiColumn>
      <BiColumn>
        <WhiteSmallText className="left">
          McDonald’s suppliers breed chickens that grow so fast, you eat them
          when
        </WhiteSmallText>
        <YellowBoldText className="left">They're still babies.</YellowBoldText>
        <WhiteBoldText className="left">
          They're slaughtered at just 7 weeks old.
        </WhiteBoldText>
      </BiColumn>
    </FlexRow>
  </FlexContainer>
);

const Slide3 = (
  <FlexContainer className="how__graphic how__graphic--symptoms">
    <FlexColumnToRow className="how__graphic--symptoms">
      <TriColumn className="how__graphic--symptoms">
        <FlexColumn>
          <SymptomIcon>
            <SVG src={symptom1} />
          </SymptomIcon>
          <YellowSmallBoldText className=" left">
            Chemical burns
          </YellowSmallBoldText>
          <WhiteSmallText className="left">
            Chickens often have to stand in their own waste, which contains
            concentrated levels of ammonia. This chemical leaves pain-ful burns
            on their skin.
          </WhiteSmallText>
        </FlexColumn>
      </TriColumn>
      <TriColumn className="how__graphic--symptoms">
        <FlexColumn>
          <SymptomIcon>
            <SVG src={symptom2} />
          </SymptomIcon>
          <YellowSmallBoldText className=" left">
            Leg injuries
          </YellowSmallBoldText>
          <WhiteSmallText className="left">
            Chickens raised for McDonald's grow so large so fast that many
            endure debili-tating injuries includ-ing broken legs, which buckle
            under the enormous weight.
          </WhiteSmallText>
        </FlexColumn>
      </TriColumn>
      <TriColumn className="how__graphic--symptoms">
        <FlexColumn>
          <SymptomIcon>
            <SVG src={symptom3} />
          </SymptomIcon>
          <YellowSmallBoldText className=" left">
            Heart attacks
          </YellowSmallBoldText>
          <WhiteSmallText className="left">
            These unnaturally large birds have such high blood pressure that
            many die slow painful deaths from heart disease or arrhythmias.
          </WhiteSmallText>
        </FlexColumn>
      </TriColumn>
    </FlexColumnToRow>
  </FlexContainer>
);
const Slide4 = (
  <FlexContainer className="how__graphic how__graphic--warehouses">
    <WhiteBoldText>
      Chickens raised for McDonald's are confined in
    </WhiteBoldText>
    <YellowBoldText>Cramped, barren warehouses</YellowBoldText>

    <SVG src={warehouses} />
    <FlexRow>
      <BiColumn>
        <BulletContainer>
          <Bullet className="how__graphic--bullet">
            <SVG src={warehousesBullet1} />
          </Bullet>
          <WhiteSmallText className="left">
            On factory farms that supply McDonald’s, tens of thousands of birds
            live in one single barn.
          </WhiteSmallText>
        </BulletContainer>
        <BulletContainer>
          <Bullet className="how__graphic--bullet">
            <SVG src={warehousesBullet2} />
          </Bullet>
          <WhiteSmallText className="left">
            The sheds are kept dark, often with no natural light, which
            discourages birds from moving.
          </WhiteSmallText>
        </BulletContainer>
      </BiColumn>
      <BiColumn>
        <BulletContainer>
          <Bullet className="how__graphic--bullet">
            <SVG src={warehousesBullet3} />
          </Bullet>
          <WhiteSmallText className="left">
            The air is full of ammonia from their waste. These fumes can burn
            their throats as they breathe them in.
          </WhiteSmallText>
        </BulletContainer>
        <BulletContainer>
          <Bullet className="how__graphic--bullet">
            <SVG src={warehousesBullet4} />
          </Bullet>
          <WhiteSmallText className="left">
            Birds are tightly packed together and can struggle to even reach
            food and water.
          </WhiteSmallText>
        </BulletContainer>
      </BiColumn>
    </FlexRow>
  </FlexContainer>
);
const Slide5 = (
  <FlexContainer className="how__graphic how__graphic--slaughter">
    <WhiteBoldText>After 7 weeks of suffering</WhiteBoldText>
    <WhiteSmallText>chickens are loaded on a truck and driven</WhiteSmallText>
    <YellowBoldText>Off to slaughter.</YellowBoldText>
    <WhiteSmallText>
      These chickens are ground up and turned into nuggets and patties for
      McDonald's
    </WhiteSmallText>
    <SVG src={slaughter} />
  </FlexContainer>
);
const Slide6 = (
  <FlexContainer className="how__graphic how__graphic--companies">
    <WhiteBoldText>These companies have stronger</WhiteBoldText>
    <YellowBoldText>Chicken welfare policies</YellowBoldText>
    <WhiteSmallText>than McDonald's.</WhiteSmallText>
    <SVG src={companies} />
  </FlexContainer>
);
const McNuggetTitle = (
  <div>
    <TitleNoMarginBottom>{data.mcNugget.overlayText.title}</TitleNoMarginBottom>
    <Subtitle>{data.mcNugget.overlayText.subtitle}</Subtitle>
  </div>
);

export const McNuggetMarkupMobile = (
  <FlexCenter>
    <Container className="container--how">
      {McNuggetTitle}
      <Carousel dragging={false} decorators={decorators}>
        {Slide1}
        {Slide2}
        {Slide3}
        {Slide4}
        {Slide5}
        {Slide6}
      </Carousel>
    </Container>
  </FlexCenter>
);

export const McNuggetMarkupDesktop = (
  <FlexCenter>
    <Container className="container--how">
      {McNuggetTitle}
      <Carousel
        vertical={true}
        dragging={false}
        decorators={decoratorsVertical}
      >
        {Slide1}
        {Slide2}
        {Slide3}
        {Slide4}
        {Slide5}
        {Slide6}
      </Carousel>
    </Container>
  </FlexCenter>
);

export const RonaldMarkup = (
  <FlexCenter>
    <Container className="container--ronald">
      <Title>{data.ronald.overlayText.title}</Title>
      <ShortHR />
      <VideoList>
        <VideoListItem>
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
        </VideoListItem>
        <VideoListItem>
          <RespVideo>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/up4lcLcXw2c?rel=0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </RespVideo>
        </VideoListItem>
      </VideoList>
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
      <a href={pressReleaseFile} target="_blank">
        <RedButton>{data.media.overlayText.button1}</RedButton>
      </a>
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
