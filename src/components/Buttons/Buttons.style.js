import styled from 'styled-components';

export const RedButton = styled.button`
  border-radius: 1em;
  background: rgba(193, 33, 38, 1);
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.4em 0.9em;
  border: none;
  font-weight: bold;
  &:hover {
    background: linear-gradient(#bf2026, #ef4446);
  }
`;
