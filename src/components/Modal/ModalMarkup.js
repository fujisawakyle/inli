import React from 'react';
import data from '../../data/data.json';

import { FlexCenter, Container, Title, ShortHR } from './ModalMarkup.style';

export const SadTruthMarkup = (
  <FlexCenter>
    <Container>
      <Title>{data.sadTruth.overlayText.title}</Title>
      <ShortHR />
      <p>{data.sadTruth.overlayText.first}</p>
      <p>{data.sadTruth.overlayText.second}</p>

      <img src="http://placehold.it/600x300" />
      <img src="http://placehold.it/600x300" />
      <img src="http://placehold.it/600x300" />
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
      <p>pending content</p>
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
