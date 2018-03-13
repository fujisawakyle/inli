import React, { Component } from 'react';
import { Container, Title, Subtitle } from './ActionsBar.style';
import ActionSlider from './Carosuel';
import data from '../../data/data.json';

export default class ActionsBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Title>{data.takeAction.title}</Title>
        <Subtitle>{data.takeAction.subtitle}</Subtitle>
        <ActionSlider />
      </div>
    );
  }
}
