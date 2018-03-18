import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  background: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.5em;
  ${media.md`
    flex-direction: row;
`};
`;

export const ContentContainer = styled.div`
  color: white;
  width: 95%;

  ${media.sm`
    width: 45%;
  `};

  ${media.md`
    width: 50%;
    max-width: 400px;
  `};
`;

export const ImageContainer = styled.div`
  width: 95%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.md`
    width: 50%;
    max-width: 400px;
  `};
`;

export const Image = styled.img`
  width: 70%;
  margin-top: 1em;
  max-width: 400px;

  ${media.md`
    width: 100%;
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
  max-width: 265px;
  margin: 1rem auto;
`;
