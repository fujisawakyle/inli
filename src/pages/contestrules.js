import React from 'react';
import SVG from 'react-inlinesvg';
import Link from 'gatsby-link';

import artGalleryPDF from '../assets/downloads/Official_Rules-McDonalds_Campaign_Nationwide_Art_Show.pdf';
import INLILogoText from '../assets/svg/INLILogoText.svg';
import StyledSubpage from '../blocks/styledSubpage';

export default () => {
  return (
    <StyledSubpage.Container>
      <Link to="/">
        <StyledSubpage.Logo>
          <SVG src={INLILogoText} />
        </StyledSubpage.Logo>
      </Link>
      <StyledSubpage.Title>Contest Rules</StyledSubpage.Title>
      <a href={artGalleryPDF} target="_blank">
        <StyledSubpage.RedButtonWhiteBorder>open pdf</StyledSubpage.RedButtonWhiteBorder>
      </a>
    </StyledSubpage.Container>
  );
};
