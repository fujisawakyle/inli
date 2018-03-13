import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;

  ${media.md`
    flex-direction: row;
  `};
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin-top: 1rem;
`;
export const Subtitle = styled.h4`
  text-align: center;
  margin-top: 1rem;
`;
