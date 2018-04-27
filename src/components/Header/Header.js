import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
  FlexCenter,
  Container,
  LogoContainer,
  Logo,
  LogoText,
  ItemsContainer,
  ToggleItemsContainer,
  SocialBlock,
  SocialIcon,
  DonateButton,
  Menu,
  NavContainer,
  NavList,
  NavLink,
  NavLinkUpper,
  NavSeparator
} from './Header.style';
import _ from 'lodash';
import data from '../../data/data.json';

import ModalTrigger from '../Modal/ModalTrigger';

import INLILogo from '../../assets/svg/INLILogo.svg';
import INLILogoText from '../../assets/svg/INLILogoText.svg';
import menuIcon from '../../assets/svg/menuIcon.svg';
import facebookIcon from '../../assets/svg/facebookIcon.svg';
import instagramIcon from '../../assets/svg/instagramIcon.svg';
import twitterIcon from '../../assets/svg/twitterIcon.svg';

import { ModalManager } from 'react-dynamic-modal';

let Social, Donate, HeaderLogo, Navbar;
export default class Header extends Component {
  state = {};

  createNav = route => {
    return data[route].navLinkTitles.map(function(link) {
      return (
        <a
          onClick={() => {
            ModalManager.close();
            document
              .getElementById('___gatsby')
              .classList.remove('blur', 'fixed');
          }}
          href={`#${link.anchor}`}
        >
          <NavLink key={link.anchor}>{link.title}</NavLink>
          <NavSeparator />
        </a>
      );
    });
  };

  render() {
    if (this.props.header == 'root') {
      Social = (
        <SocialBlock>
          <a href={data.socialBlock.facebookURL} target="_blank">
            <SocialIcon src={facebookIcon} />
          </a>
          <a href={data.socialBlock.instagramURL} target="_blank">
            <SocialIcon src={instagramIcon} />
          </a>
          <a href={data.socialBlock.twitterURL} target="_blank">
            <SocialIcon src={twitterIcon} />
          </a>
        </SocialBlock>
      );
      Donate = (
        <a
          href="https://secure.everyaction.com/nS49jYz1PkOkiYKha88UbQ2?sourceid=1025520"
          target="_blank"
        >
          <DonateButton>Donate</DonateButton>
        </a>
      );
      HeaderLogo = (
        <Link to="/">
          <Logo src={INLILogo} />
          <LogoText src={INLILogoText} />
        </Link>
      );
      Navbar = (
        <NavContainer>
          <NavList>
            {this.createNav('root')}
            <br />
            <FlexCenter>
              <a
                href="https://secure.everyaction.com/nS49jYz1PkOkiYKha88UbQ2?sourceid=1025520"
                target="_blank"
              >
                <DonateButton>Donate</DonateButton>
              </a>
            </FlexCenter>
            <br />
            <FlexCenter>{Social}</FlexCenter>
          </NavList>
        </NavContainer>
      );
    } else if (this.props.header == 'franchise') {
      Social = <div />;
      Donate = <div />;
      HeaderLogo = (
        <Link to="/franchise">
          <Logo src={INLILogo} />
        </Link>
      );
      Navbar = (
        <NavContainer>
          <NavList>{this.createNav('franchise')}</NavList>
        </NavContainer>
      );
    }

    return (
      <Container>
        <LogoContainer>{HeaderLogo}</LogoContainer>
        <ItemsContainer>
          <ToggleItemsContainer>
            {Social}
            {Donate}
          </ToggleItemsContainer>
          <ModalTrigger
            modalTransition="fade"
            triggerItem={<Menu src={menuIcon} />}
            markupToDisplay={Navbar}
          />
        </ItemsContainer>
      </Container>
    );
  }
}
