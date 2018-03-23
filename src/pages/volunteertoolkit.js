import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import { RedButton } from '../components/Buttons/Buttons.style';

import toolkitPDF from '../assets/downloads/McD-Campaign-ToolKit.pdf';
import INLILogoText from '../assets/svg/INLILogoText.svg';

const Container = styled.div`
  background-image: radial-gradient(
    rgb(245, 0, 0),
    rgb(230, 0, 0),
    rgb(130, 0, 0)
  );
  background-attachment: fixed;
  color: #fff953;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 12em;
  margin-bottom: 0.5em;
`;

const Title = styled.h1`
  margin-bottom: 0.5em;
`;

const RedButtonWhiteBorder = styled(RedButton)`
  border: 2px solid white;
`;

export default () => {
  return (
    <Container>
      <Logo>
        <SVG src={INLILogoText} />
      </Logo>
      <Title>Volunteer Tool Kit</Title>
      <a href={toolkitPDF} target="_blank">
        <RedButtonWhiteBorder>open pdf</RedButtonWhiteBorder>
      </a>
    </Container>
  );
};
