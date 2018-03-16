import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  padding: 1rem 0;
  color: white;
  background: #ef4446;
  z-index: 1;
  padding: 3rem 0;
  ${media.md`
    
  `};
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
  margin: 0 auto;

  z-index: 1;
  margin-bottom: 1.5rem;

  ${media.md`
    width: 340px;
  `};
`;
