import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  position: relative;
  background: url(${props => props.backgroundSm});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  font-family: 'Raleway', sans-serif;
  ${media.md`
    background: url(${props => props.backgroundLg});
    background-size: cover;
    padding: 6rem 0;
  `};
`;

export const DarkOpaqueFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;

  z-index: 1;
  margin-bottom: 1.5rem;

  ${media.md`
    font-size: 3rem;
  `};
`;

export const Subtitle = styled.h4`
  color: white;
  text-align: center;
  line-height: 1.5;
  width: 60%;
  font-weight: 500;

  z-index: 1;
  margin-bottom: 1.5rem;

  ${media.md`
    width: 340px;
  `};
`;
