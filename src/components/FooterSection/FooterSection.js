import React, { Component } from 'react';
import { Container, Logo, Disclaimer } from './FooterSection.style';
import thlLogo from '../../assets/svg/thlLogo.svg';
import data from '../../data/data.json';

export default class WhySection extends Component {
  state = {};

  render() {
    return (
      <Container>
        <a style={{marginBottom: '1em'}} href="https://thehumaneleague.org" target="_blank"><Logo src={thlLogo} /></a>
        <Disclaimer>{data.footer.disclaimer}</Disclaimer>
      </Container>
    );
  }
}
