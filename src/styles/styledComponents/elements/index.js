import styled from "styled-components";

import { fromThemeProps } from "../../../helpers/utilities";
import media from "../../../helpers/media";

export const H1 = styled.h1`
  margin-bottom: 1.5rem;
  color: ${fromThemeProps("h1Color")};
  font-family: ${fromThemeProps("h1Font")};
  font-size: ${fromThemeProps("h1FontSizeMobile")};
  font-weight: ${fromThemeProps("h1Weight")};
  text-align: center;
  text-transform: uppercase;

  ${media.xs`
    font-size: ${fromThemeProps("h1FontSizeDesktop")};
  `}
`;

export const H2 = styled.h2`
  color: ${fromThemeProps("h2Color")};
  font-family: ${fromThemeProps("h2Font")};
  font-size: ${fromThemeProps("h2FontSizeMobile")};
  font-weight: ${fromThemeProps("h2Weight")};
  text-align: center;
  text-transform: uppercase;

  ${media.xs`
    font-size: ${fromThemeProps("h2FontSizeDesktop")};
  `}
`;

export const H3 = styled.h3`
  color: ${fromThemeProps("h3Color")};
  font-family: ${fromThemeProps("h3Font")};
  font-size: ${fromThemeProps("h3FontSizeMobile")};
  font-weight: ${fromThemeProps("h3Weight")};
  line-height: 1.5;
  text-align: center;


  ${media.xs`
    font-size: ${fromThemeProps("h3FontSizeDesktop")};
    font-weight: 500;
  `}
`;

export const H4 = styled.h4`
  color: ${fromThemeProps("h4Color")};
  font-family: ${fromThemeProps("h4Font")};
  font-size: ${fromThemeProps("h4FontSizeMobile")};
  font-weight: ${fromThemeProps("h4Weight")};
  text-align: center;

  ${media.xs`
    font-size: ${fromThemeProps("h4FontSizeDesktop")};
    font-weight: ${fromThemeProps("h4Weight")};
  `}
`;
export const H5 = styled.h5`
  color: ${fromThemeProps("h5Color")};
  font-family: ${fromThemeProps("h5Font")};
  font-size: ${fromThemeProps("h5FontSizeMobile")};
  font-weight: ${fromThemeProps("h5Weight")};

  ${media.xs`
    font-size: ${fromThemeProps("h5FontSizeDesktop")};
  `}
`;

export const P = styled.p`
  margin-bottom: ${props => props.marginBottom || "1.5rem"};
  margin-top: ${props => props.marginTop || "0"};
  color: ${fromThemeProps("pColor")};
  font-family: ${fromThemeProps("pFont")};
  font-size: ${fromThemeProps("pFontSizeMobile")};
  font-weight: ${props => props.weight || fromThemeProps("pWeight")};

  ${media.xs`
    font-size: ${fromThemeProps("pFontSizeDesktop")};
  `}

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const A = styled.a`
  color: ${fromThemeProps("aColor")};
  font-family: ${fromThemeProps("aFont")};
  font-size: ${fromThemeProps("aFontSizeMobile")};
  font-weight: ${fromThemeProps("aWeight")};
  text-decoration: underline;

  ${media.xs`
    font-size: ${fromThemeProps("aFontSizeDesktop")};
  `}
`;

export const Button = styled(A)`
  background: ${fromThemeProps("buttonBackground")};
  border-radius: 1em;
  padding: 0.4em 0.9em;
  margin-bottom: 2rem;

  color: ${fromThemeProps("buttonForeground")};
  font-family: ${fromThemeProps("buttonFont")};
  font-size: ${fromThemeProps("buttonFontSizeMobile")};
  font-weight: ${fromThemeProps("buttonWeight")};
  text-decoration: none;
  text-transform: uppercase;

  ${media.xs`
    font-size: ${fromThemeProps("buttonFontSizeDesktop")};
  `}

  &:hover {
    background: rgb(158, 28, 32);
  }
`

export const Ol = styled.ol``;

export const Ul = styled.ul``;

export const Li = styled.li``;

export const Strong = styled.strong``;

export const NAVANCHOR = styled.a`
    display: block;
    position: relative;
    top: -2.9em;
    visibility: hidden;
`

export const PortraitPhoto = styled.div`
  background: ${props => url(props.background)};
  height: 500px;
  width: 300px;
`
export const SquarePhoto = styled.div`
  background: ${props => url(props.background)};
  height: 300px;
  width: 300px;
`