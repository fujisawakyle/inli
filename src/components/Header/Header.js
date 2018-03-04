import React from 'react';
import Link from 'gatsby-link';
import { Container, Logo, NavLink, NavLinkYellow } from './Header.style';
import _ from 'lodash';

import headerLogo from '../../assets/svg/THL18-vertical-logo-white.svg';

const Header = ({ navLinks }) => (
  <div>
    <Container>
      <Link to="/">
        <Logo src={headerLogo} />
      </Link>
      {navLinks.map(function(link) {
        return (
          <Link to={'/' + link.split(' ').join('')}>
            <NavLink key={link}>{link}</NavLink>
          </Link>
        );
      })}
      <Link to="/donate">
        <NavLinkYellow>Donate</NavLinkYellow>
      </Link>
    </Container>
  </div>
);

export default Header;
