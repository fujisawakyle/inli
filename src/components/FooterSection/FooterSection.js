import React, { Component } from 'react';
import { Container, Logo, Disclaimer } from './FooterSection.style';
import thlLogo from '../../assets/svg/thlLogo.svg';
import data from '../../data/data.json';
import ModalTrigger from '../Modal/ModalTrigger';

export default class FooterSection extends Component {
  state = {};

  render() {
    return (
      <Container>
        <a
          style={{ marginTop: '.5em', marginBottom: '1em' }}
          href="https://thehumaneleague.org"
          target="_blank"
        >
          <Logo src={thlLogo} />
        </a>
        <ModalTrigger
          modalTransition="scaleUp"
          triggerItem={this.props.triggerItem}
          markupToDisplay={this.props.markupToDisplay}
        />
        <Disclaimer style={{ marginTop: '2.5em' }}>
          {data.footer.disclaimer}
        </Disclaimer>
      </Container>
    );
  }
}
