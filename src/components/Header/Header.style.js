import styled from 'styled-components';

export const Container = styled.div`
  background: #303030;

  width: 100%;
  height: 5em;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 5%;
  max-width: 200px;
`;

export const NavLink = styled.li`
  color: #f8f8f8;
  text-transform: uppercase;
  list-style-type: none;
`;

export const NavLinkYellow = styled(NavLink)`
  color: yellow;
`;
