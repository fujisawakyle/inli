import styled from 'styled-components';
import media from '../../layouts/media';

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 75%;
  max-width: 700px;
  height: 100%;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway';
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 900;
`;

export const ShortHR = styled.hr`
  width: 200px;
  border-bottom: 2px solid #efefef;
`;

export const ConditionsImage = styled.div`
  background: url(${props => props.background1});
  margin: 0 auto;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center bottom;
`;

export const ConditionsImageBottomRight = styled(ConditionsImage)`
  background-position: bottom right;
  ${media.md`
  background: url(${props => props.background2});
    background-size: cover;
    background-position: bottom right;
  `};
`;

export const ConditionsImageCenter = styled(ConditionsImage)`
  background-position: center;
  ${media.sm`
    background: url(${props => props.background2});
    background-size: cover;
    background-position: center;
  `};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 1em 0;
`;

export const Number = styled.div`
  border: 2px solid #efefef;
  border-radius: 50%;
  background: rgb(193, 33, 38);
  font-family: 'Source Sans Pro';
  font-size: 1.8em;
  font-weight: 700;
  padding: 8px 12px 11px 12px;
  margin-right: 0.4em;
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
