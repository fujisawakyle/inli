import React from 'react';
import Link from 'gatsby-link';
import {
  FlexCenter,
  Container,
  LogoContainer,
  Logo,
  LogoText,
  ItemsContainer,
  SocialBlock,
  SocialIcon,
  DonateButton,
  Menu,
  NavContainer,
  NavList,
  NavLink,
  NavLinkUpper
} from './Header.style';
import _ from 'lodash';
import data from '../../data/data.json';

import ModalTrigger from '../Modal/ModalTrigger';

import INLILogo from '../../assets/svg/INLILogo.svg';
import INLILogoText from '../../assets/svg/INLILogoText.svg';
import menuIcon from '../../assets/svg/menuIcon.svg';
import facebookIcon from '../../assets/svg/facebook.svg';
import instagramIcon from '../../assets/svg/instagram.svg';
import twitterIcon from '../../assets/svg/twitter.svg';

import { ModalManager } from 'react-dynamic-modal';

let Social = (
  <SocialBlock>
    <a href={data.social.facebookURL} target="_blank">
      <SocialIcon src={facebookIcon} />
    </a>
    <a href={data.social.instagramURL} target="_blank">
      <SocialIcon src={instagramIcon} />
    </a>
    <a href={data.social.twitterURL} target="_blank">
      <SocialIcon src={twitterIcon} />
    </a>
  </SocialBlock>
);

let Navbar = (
  <NavContainer>
    <NavList>
      {data.navLinkTitles.map(function(link) {
        return (
          <a onClick={ModalManager.close} href={`#${link.anchor}`}>
            <NavLink key={link.anchor}>{link.title}</NavLink>
          </a>
        );
      })}
      <br />
      <FlexCenter>
        <DonateButton>Donate</DonateButton>
      </FlexCenter>
      <br />
      <FlexCenter>{Social}</FlexCenter>
    </NavList>
  </NavContainer>
);

const Header = ({ navLinks }) => (
  <div>
    <Container>
      <Link to="/">
        <LogoContainer>
          <Logo src={INLILogo} />
          <LogoText src={INLILogoText} />
        </LogoContainer>
      </Link>
      <ItemsContainer>
        {Social}
        <DonateButton href="#">Donate</DonateButton>
        <ModalTrigger
          modalTransition="fade"
          triggerItem={<Menu src={menuIcon} />}
          markupToDisplay={Navbar}
        />
      </ItemsContainer>
      {/* {navLinks.map(function(link) {
        return (
          <Link to={'/' + link.split(' ').join('')}>
            <NavLink key={link}>{link}</NavLink>
          </Link>
        );
      })} */}
    </Container>
  </div>
);

export default Header;
