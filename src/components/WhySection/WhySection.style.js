import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  font-family: 'Raleway', sans-serif;
  ${media.md`
    padding: 2rem 0;
  `};
`;

export const Title = styled.h1`
  color: #ef4446;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  z-index: 1;
  margin-bottom: 1.5rem;
  max-width: 330px;

  ${media.md`
    font-size: 3rem;
    max-width: none;
  `};
`;

export const Subtitle = styled.h4`
  color: #222222;
  text-align: center;
  line-height: 1.5;
  width: 90%;
  max-width: 330px;
  font-weight: 700;
  z-index: 1;
  margin-bottom: 0.5rem;

  ${media.md`
    max-width: none;
  `};
`;

export const ImageSmall = styled.img`
  display: inline-block;
  ${media.md`
        display:none;
    `};
`;

export const ImageLarge = styled.img`
  display: none;
  ${media.md`
        display: inline-block;
        width:80%;
        max-width: 670px;
    `};
`;

export const DynamicImage = styled.div`
  width: 273px;
  height: 445px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background: url(${props => props.imgSm});
  ${media.md`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
    background: url(${props => props.imgLg});
`};
`;
