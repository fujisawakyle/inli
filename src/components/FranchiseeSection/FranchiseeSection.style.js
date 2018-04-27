import styled from 'styled-components';
import media from '../../layouts/media';

export const Container = styled.div`
  background: #ef4446;
  color: #fefefe;
  padding: 2rem 0;
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0 auto;
  /* width: 365px; */

  ${media.sm`
    /* width: 422px; */
    font-size: 1.5rem;
  `};
`;

export const Subtitle = styled.h4`
  color: #fff;
  text-align: center;
  line-height: 1.5;
  width: 60%;
  font-weight: 500;
  margin: 0 auto;
  z-index: 1;
  padding-bottom: 1rem;
  margin-bottom: 0;

  ${media.md`
    width: 340px;
    margin-bottom: 1.5rem;
  `};
`;

export const HR = styled.hr`
  margin: 0.9rem auto 1rem !important;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  max-width: 16em;
  background: none;
  padding-bottom: 0.5rem;
`;
