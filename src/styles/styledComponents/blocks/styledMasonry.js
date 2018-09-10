import styled from 'styled-components';
import media from '../../../helpers/media';

const StyledMasonry = {};

StyledMasonry.Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-height: 700px;
  margin-left: -8px; /* Adjustment for the gutter */
  width: 100%;

  ${media.xs`
    max-height: 1300px;
  `}

  ${media.sm`
    max-height: 1500px;
  `}
`;

StyledMasonry.PortraitBrick = styled.figure`
  margin: 0 8px 8px 0; /* Some gutter */
  width: 50%;
  height: calc(275px + 30vw);

  ${media.xs`
    width:33%;
  `}

  ${media.md`
    height: 580px;
  `}
`;

StyledMasonry.SquareBrick = styled.figure`
  margin: 0 8px 8px 0; /* Some gutter */
  width: 50%;
  height: calc(275px/2 - 4px + 15vw);

  ${media.xs`
    width: 33%;
  `}

  ${media.md`
    height: 286px;
  `}
`;

StyledMasonry.Image = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
`;

export default StyledMasonry;