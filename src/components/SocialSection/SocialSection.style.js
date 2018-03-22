import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  position: relative;
  background: #bf2026;
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

export const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  z-index: 1;
  margin-bottom: 1.5rem;
  max-width: 330px;

  ${media.md`
    font-size: 2rem;
    max-width: none;
  `};
`;

export const ShortHR = styled.hr`
  width: 200px;
  border-bottom: 2px solid #efefef;
`;

export const TwitterContainer = styled.div`
  width: 90%;
  max-width: 720px;
`;
