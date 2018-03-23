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
import facebookIcon from '../../assets/svg/facebookIcon.svg';
import instagramIcon from '../../assets/svg/instagramIcon.svg';
import twitterIcon from '../../assets/svg/twitterIcon.svg';

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

const Header = () => (
  <Container>
    <LogoContainer>
      <Link to="/">
        <Logo src={INLILogo} />
        <LogoText src={INLILogoText} />
      </Link>
    </LogoContainer>
    <ItemsContainer>
      {Social}
      <DonateButton href="#">Donate</DonateButton>
      <ModalTrigger
        modalTransition="fade"
        triggerItem={<Menu src={menuIcon} />}
        markupToDisplay={Navbar}
      />
    </ItemsContainer>
  </Container>
);

export default Header;
