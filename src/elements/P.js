import styled from 'styled-components';
import media from '../layouts/media';

export const P = styled.p`
  font-size: 16px;
  line-height: 1.5;

  ${media.md`
    line-height: 2;
  `};
`;
