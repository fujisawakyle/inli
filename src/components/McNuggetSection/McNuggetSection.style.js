import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  background: #edeef0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.5em;
  ${media.md`
    flex-direction: row;
    padding: 3em 0;
`};
`;

export const ContentContainer = styled.div`
  color: #222222;
  width: 95%;

  ${media.sm`
    width: 50%;
  `} ${media.md`
    max-width:400px;
    order: 1;
  `};
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: 600px;

  ${media.md`
    width: 50%;
    max-width: 400px;
    height: 250px;
  `};
`;

export const Image = styled.img`
  width: 100%;
  position: relative;

  ${media.md`
    position: absolute;
    left: -33%;
    top: -92px;
    width: 144%;
    max-width: 600px;
  `};
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 900;
  ${media.md`
    font-size: 3rem;
  `};
`;

export const Subtitle = styled.h4`
  text-align: center;
  margin-bottom: 1rem;
`;
