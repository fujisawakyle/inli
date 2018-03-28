import styled from 'styled-components';
import media from '../../layouts/media';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 100%;

  ${media.md`
    padding: 1em;
  `};

  &.how__graphic {
    width: 90%;
    margin: 0 auto;
    h1 {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1rem;
    }
    h3 {
      font-size: 0.75rem;
    }
    p {
      font-size: 0.5rem;
      line-height: 1;
    }

    ${media.sm`
      h1 {
        font-size: 1.6rem;
      }
      h2 {
        font-size: 1.2rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.9rem; 
      }
    `};

    ${media.md`
      h1 {
        font-size: 2.1rem;
      }
    `};
  }

  &.how__graphic--chicks {
    max-width: 800px;
  }

  &.how__graphic--comparision {
    width: 85%;
  }

  &.how__graphic--symptoms {
    svg {
      width: 20px;
      height: 20px;
      ${media.xs`
        width:40px;
        height:40px;
      `};
      ${media.md`
        width: 50px;
        height: 50px;
      `};
    }
  }

  &.how__graphic--warehouses {
    svg {
      height: 30%;
    }
    &.how__graphic--bullet {
      svg {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
  &.how__graphic--slaughter {
    width: 80%;
  }
  &.how__graphic--companies {
    width: 80%;
    p {
      margin-bottom: 1em;
    }
  }
`;

export const FlexChild = styled.div`
  margin: 2rem auto;
  width: 100%;

  ${media.sm`
    margin: 4rem auto;
  `};

  &.how__graphic {
    height: 100% !important;
    &--chicks {
      margin-bottom: -2em !important;
    }

    tspan,
    text {
      font-family: 'Raleway';
      font-weight: 500;
    }
  }
  &.how__graphic--warehouses {
    margin: 0 auto;
    width: 90%;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &.how__graphic--comparision {
    justify-content: space-between;
  }

  &.how__graphic--symptoms {
    flex-direction: column;
    height: 100%;

    ${media.sm`
      flex-direction: row;
    `};
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexColumnToRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1em;
  width: 100%;

  ${media.md`
    flex-direction: row;
    margin-bottom: 0;
  `};
`;

export const FlexColumnToRowFixedHeight = styled(FlexColumnToRow)``;

export const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &.how__graphic--symptoms {
    justify-content: center;
  }
`;

export const DynamicWidth = styled.div`
  width: 100%;
  ${media.md`
   width: 50%;
  `};
`;

export const Order1 = styled(DynamicWidth)`
  ${media.md`
    order: 1;
  `};
`;

export const DynamicWidthOrder1 = styled(Order1)`
  ${media.md`
    width: 100%;
    margin-bottom: 1em;
  `};
`;

export const MobileMarginBottom = styled.div`
  margin-bottom: 1em;
  width: 100%;

  &.how__graphic {
    &--symptoms {
      margin-bottom: 2em;
    }

    &--companies {
      margin-bottom: 2em;
    }
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 40rem;
  height: 100%;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway';
  transform: none;

  &.container--how {
    max-width: 60rem;
  }

  p {
    width: 100%;
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 900;
`;

export const TitleNoMarginBottom = styled(Title)`
  margin-bottom: 0;
`;

export const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 0;
`;

export const ShortHR = styled.hr`
  background: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  width: 95%;
  max-width: 10em;
`;

export const Intro = styled.h4`
  text-align: center;
  line-height: 1.8;
  font-size: 1.2rem;
`;

export const ConditionsImage = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8) 12%, transparent 54%),
    url(${props => props.background1});
  margin: 0 auto;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center bottom;
`;

export const ConditionsImageBottomRight = styled(ConditionsImage)`
  background-position: bottom right;
  ${media.md`
  background: linear-gradient(
    rgba(0,0,0,.8) 12%,
    transparent 54%
    ),
    url(${props => props.background2});
    background-size: cover;
    background-position: bottom right;
  `};
`;

export const ConditionsImageCenter = styled(ConditionsImage)`
  background-position: center;
  ${media.sm`
    background: linear-gradient(
    rgba(0,0,0,.8) 12%,
    transparent 54%
    ),
    url(${props => props.background2});
    background-size: cover;
    background-position: center;
  `};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0.5em;
  width: 95%;
  max-width: 18em;
  margin: 1em auto;
`;

export const Number = styled.div`
  border: 2px solid #efefef;
  border-radius: 50%;
  background: rgb(193, 33, 38);
  font-family: 'Raleway';
  font-size: 1.8em;
  font-weight: 700;
  padding: 8px 12px 11px 12px;
  margin-right: 0.4em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;

  &.number--three {
    & > div {
      position: relative;
      bottom: 0.07em;
    }
  }
`;

export const Content = styled.div`
  text-shadow: 0 1px 1px rgba(0, 0, 0, 1);
`;

export const ImageTitle = styled.h5`
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 0.35em;
  font-size: 1em;
`;

export const Description = styled.p`
  font-size: 0.8em;
  line-height: 1.4;
  margin-bottom: 0;
`;

export const DescriptionCenter = styled(Description)`
  text-align: center;
`;

export const WhiteBoldText = styled.h2`
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 0;

  &.left {
    text-align: left;
  }
`;

export const WhiteSmallText = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 0;

  &.left {
    text-align: left;
  }
`;

export const YellowBoldText = styled.h1`
  text-align: center;
  color: #ffc629;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 5.5vw;

  &.left {
    text-align: left;
  }
`;

export const YellowSmallBoldText = styled.h3`
  color: #ffc629;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 0;
  font-size: 2vw;
`;

export const TriColumn = styled.div`
  width: 33.3%;

  &.how__graphic--symptoms {
    padding: 0.2em 0;
    width: 80%;

    ${media.md`
      width:33.3%;
      padding: 0 0.5em;
    `};
  }
`;

export const BiColumn = styled.div`
  width: 48%;
`;

export const BulletContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
  align-items: center;
`;

export const Bullet = styled.div`
  width: 20px;
  margin: 2px;
  ${media.lg`
    width: 32px;
    margin: 15px;
  `};
`;

export const SymptomIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
`;
