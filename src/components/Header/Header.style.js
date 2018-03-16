import styled from 'styled-components';
import media from '../../layouts/media';

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 4em;

  ${media.md`
    height: 3em;
  `};
`;
export const LogoContainer = styled.div`
  width: 185px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1em;
  ${media.md`
    width: 150px;
  `};
`;

export const Logo = styled.img`
  width: 50px;
  vertical-align: middle;
  ${media.md`
    width: 40px;
  `};
`;

export const LogoText = styled.img`
  width: 120px;
  vertical-align: middle;
  ${media.md`
    width: 100px;
  `};
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1.5em;
  ${media.md`
    width: 350px;
    justify-content: space-between;
    
  `};
`;
export const SocialBlock = styled.div`
  display: none;
  ${media.md`
    width: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;

export const SocialIcon = styled.img`
  width: 25px;
  max-height: 25px;
  vertical-align: middle;
`;
export const DonateButton = styled.div`
  font-family: Raleway;
  display: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(#bf2026, #ef4446);
  }

  ${media.md`
    display: inline-block;
    width: 127px;
    border-radius: 1em;
    background: rgba(193, 33, 38, 1);
    color: white;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0.2em 0.9em;
    border: none;
    font-weight: bold;
  `};
`;
export const Menu = styled.img`
  width: 35px;
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
