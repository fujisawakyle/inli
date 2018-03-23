import React, { Component } from 'react';
import { Container, Logo, Disclaimer } from './FooterSection.style';
import thlLogo from '../../assets/svg/thlLogo.svg';
import data from '../../data/data.json';

export default class WhySection extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Logo src={thlLogo} />
        <Disclaimer>{data.footer.disclaimer}</Disclaimer>
      </Container>
    );
  }
}
