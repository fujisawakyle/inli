import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  position: relative;
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-family: 'Raleway', sans-serif;
  ${media.md`
    padding: 1rem 0;
  `};
`;

export const Logo = styled.img`
  width: 95%;
  max-width: 300px;
`;

export const Disclaimer = styled.p`
  text-align: center;
  font-size: 0.6rem;
  color: #888;
  margin-bottom: 0;

  ${media.sm`
    font-size: .2rem;
  `};
`;
