import React, { Component } from 'react';
import { Container, Title, Subtitle } from './ActionsBar.style';
import ActionSlider from './Carosuel';
import data from '../../data/data.json';

export default class ActionsBar extends Component {
  state = {};

  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'https://d1aqhv4sn5kxtx.cloudfront.net/actiontag/at.js';
    script.crossOrigin = 'anonymous';
    script.async = true;

    document.body.appendChild(script);
  }

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