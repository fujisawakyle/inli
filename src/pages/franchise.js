import React from 'react';
import Link from 'gatsby-link';

import Section from '../blocks/Section';

import Container from '../elements/Container';
import FlexContainer from '../elements/FlexContainer';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Picture from '../elements/Picture';
import DarkFilter from '../elements/DarkFilter';

import Header from '../components/Header/Header';
import FooterSection from '../components/FooterSection/FooterSection';

import { md } from '../layouts/media';
import data from '../data/data.json';

import interestedImg1Sm from '../assets/images/franchise/campaigns-mcdonald-marketing-happy-meal-box-only-small.png';
import behindImgSm from '../assets/svg/why/company-logos-mobile.svg';
import behindImgLg from '../assets/svg/why/company-logos-desktop.svg';
import infoImg1Sm from '../assets/images/franchise/campaigns-mcdonald-current-franchisee-small.jpg';
import infoImg2Sm from '../assets/images/franchise/campaigns-mcdonald-prospective-franchisee-small.jpg';

export default () => {
  return (
    <div>
      <Header />

      <Section name="interested" modifiers={['redBg', 'headerPadding']}>
        <Container modifiers={['column', 'unhappyContainer']}>
          <FlexContainer modifiers={['column', 'unhappyText']}>
            <Section.Title>
              <span style={{ textTransform: 'none' }}>Interested in</span>{' '}
              franchising <span style={{ textTransform: 'none' }}>with</span>{' '}
              McDonald’s?
            </Section.Title>
            <Section.Subtitle>
              {data.franchise.interested.subtitle}
            </Section.Subtitle>
          </FlexContainer>

          <Image modifiers={['unhappyImg']} src={interestedImg1Sm} />

          <FlexContainer modifiers={['unhappyText']}>
            <Section.Description>
              {data.franchise.interested.description}
            </Section.Description>
          </FlexContainer>
        </Container>
      </Section>

      <Section name="operator" modifiers={['column', 'smallPadding']}>
        <Container modifiers={['column', 'narrower']}>
          <Section.Subtitle modifiers={['darkFont']}>
            {data.franchise.operator.subtitle}
          </Section.Subtitle>
          <Section.Description modifiers={['darkFont']}>
            {data.franchise.operator.description}
          </Section.Description>
          <a href={data.franchise.operator.href}>
            <Button>{data.franchise.operator.button}</Button>
          </a>
        </Container>
      </Section>

      <Section name="boycott" modifiers={['boycottBg', 'darkFilter']}>
        <DarkFilter />
        <Container modifiers={['column']}>
          <Section.Title>{data.franchise.boycott.title}</Section.Title>
          <Section.Subtitle>{data.franchise.boycott.subtitle}</Section.Subtitle>
          <Section.Description modifiers={['narrow']}>
            {data.franchise.boycott.description}
          </Section.Description>
          <Section.Subtitle modifiers={['uppercase']}>
            {data.franchise.boycott.statement}
          </Section.Subtitle>
          <Link to="/">
            <Button>{data.franchise.boycott.button}</Button>
          </Link>
        </Container>
      </Section>

      <Section name="behind">
        <Container modifiers={['column']}>
          <Section.Title modifiers={['lightRedFont']}>
            {data.franchise.behind.title}
          </Section.Title>
          <Section.Subtitle modifiers={['darkFont']}>
            {data.franchise.behind.subtitle}
          </Section.Subtitle>
          <Picture>
            <source srcSet={behindImgLg} media={'(min-width: ' + md + ')'} />
            <Image modifiers={['narrow']} src={behindImgSm} />
          </Picture>
        </Container>
      </Section>

      <Section name="misleading" modifiers={['misleadingBg']}>
        <DarkFilter />
        <Container modifiers={['column']}>
          <Section.Title>{data.franchise.misleading.title}</Section.Title>
          <Section.Subtitle>
            {data.franchise.misleading.subtitle}
          </Section.Subtitle>
          <Section.Description modifiers={['narrow']}>
            {data.franchise.misleading.description1}
            <br />
            {data.franchise.misleading.description2}
            <br />
            Under McDonald’s current policy, Chickens raised and killed for McDonald’s food are <strong>still</strong> forcefully bred to grow so large, so fast that they literally become paralyzed under their own enormous bodies. They are still forced to live in overcrowded, dark, disgusting barns, causing painful conditions including horrible ammonia burns on their chest and legs.
          </Section.Description>
          <Link to="/">
            <Button>{data.franchise.misleading.button}</Button>
          </Link>
        </Container>
      </Section>

      <Section name="info" modifiers={['column']}>
        <Section.Title modifiers={['darkFont']}>
          {data.franchise.info.title}
        </Section.Title>
        <Container>
          <FlexContainer
            modifiers={['column', 'dipytch', 'alignLeft', 'padding']}
          >
            <Image src={infoImg1Sm} />
            <Section.Subtitle modifiers={['darkFont', 'textLeft']}>
              {data.franchise.info.subtitle1}
            </Section.Subtitle>
            <Section.Description modifiers={['darkFont', 'textLeft']}>
              {data.franchise.info.description1}
            </Section.Description>
            <a href={data.franchise.operator.href}>
              <Button>{data.franchise.info.button1}</Button>
            </a>
          </FlexContainer>
          <FlexContainer
            modifiers={['column', 'dipytch', 'alignLeft', 'padding']}
          >
            <Image src={infoImg2Sm} />
            <Section.Subtitle modifiers={['darkFont', 'textLeft']}>
              {data.franchise.info.subtitle2}
            </Section.Subtitle>
            <Section.Description modifiers={['darkFont', 'textLeft']}>
              {data.franchise.info.description2}
            </Section.Description>
            <a href={data.franchise.info.href2}>
              <Button>{data.franchise.info.button2}</Button>
            </a>
          </FlexContainer>
          <FlexContainer modifiers={['column']} />
        </Container>
      </Section>

      <FooterSection />
    </div>
  );
};
