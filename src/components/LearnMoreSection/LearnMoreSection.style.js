import styled from 'styled-components';

export const Container = styled.div`
  background: url(${props => props.background});
  background-position: center center;
  filter: drop-shadow(8px 8px 10px gray);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallText = styled.h4`
  color: white;
  text-align: center;
  margin-top: 1em;
`;
export const LargeText = styled.h1`
  color: white;
  text-transform: uppercase;
  text-align: center;
`;
