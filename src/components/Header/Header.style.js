import styled from 'styled-components';

export const Container = styled.div`
  background: #303030;

  width: 100%;
  height: 5em;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 100px;
  vertical-align: middle;
`;

export const NavLink = styled.li`
  color: #f8f8f8;
  text-transform: uppercase;
  list-style-type: none;
`;

export const NavLinkYellow = styled(NavLink)`
  color: #fec400;
`;
