import styled from 'styled-components';
import media from '../../layouts/media';

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);

  width: 100%;
  height: 4em;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 100px;
  vertical-align: middle;
`;

export const ItemsContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SocialBlock = styled.div`
  width: 200px;
`;

export const SocialIcon = styled.img`
  width: 65px;
  vertical-align: middle;
`;
export const DonateButton = styled.div`
  width: 140px;
  border-radius: 1em;
  background: rgba(193, 33, 38, 1);
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.4em 0.9em;
  border: none;
  font-weight: bold;
`;
export const Menu = styled.img`
  width: 45px;
  vertical-align: middle;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const NavList = styled.ul`
  max-width: 300px;
  width: 50%;
  height: 75%;
`;

export const NavLink = styled.li`
  color: #f8f8f8;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  border-bottom: 1px solid #f8f8f8;
  list-style: none;
  padding: 1em 0;
`;
export const NavLinkUpper = styled(NavLink)`
  text-transform: uppercase;
`;
