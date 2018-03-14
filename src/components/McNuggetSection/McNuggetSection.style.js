import styled from 'styled-components';

export const Container = styled.div`
  background: url(${props => props.background});
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const SmallText = styled.h4`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`;
export const LargeText = styled.h1`
  color: white;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
`;
