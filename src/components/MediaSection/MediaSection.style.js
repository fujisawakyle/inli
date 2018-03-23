import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  background: white;
  color: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5em 0;
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
