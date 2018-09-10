import React from 'react';

import styled, { css } from "styled-components";
import { fromThemeProps } from "../../../helpers/utilities";
import Media from "../../../helpers/media";

const SectionContainer = styled.div`
  position: relative;
  background: ${(props) => {
    if (props.background) { return props.background; }
    return props.theme.secondary;
  }};
  ${(props) => props.backgroundImage && css`
    background: url(${props.backgroundImage});
    background-size: cover;
    background-position: center;
  `}
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: ${props => props.jc || "center"};
  align-items: ${props => props.ai || "center"};
  padding: ${props => props.padding};
  padding-top: ${props => props.paddingTop || "0"};
  padding-bottom: ${props => props.paddingBottom || "0"};
  width: ${props => props.width ||
    props.theme.mobileContentWidth};
  * {
    z-index: 3;
  }

  ${Media.md`
    width: ${props => props.width ||
      props.theme.contentWidth};
  `}
`;

const Shade = styled.div`
  background: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const StyledSection = (props) => {
  const { backgroundImage, children, shaded, width, padding, paddingTop, paddingBottom } = props;
  const shade = shaded && <Shade />;
  return (
    <SectionContainer backgroundImage={backgroundImage}>
      {shade}
      <ContentContainer padding={padding} paddingTop={paddingTop} paddingBottom={paddingBottom} width={width}>
        {children}
      </ContentContainer>
    </SectionContainer>
  );
};

export default StyledSection;