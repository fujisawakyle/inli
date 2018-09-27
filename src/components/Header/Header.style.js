import styled from 'styled-components';
import media from '../../layouts/media';
import { RedButton } from '../../components/Buttons/Buttons.style';

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
  top: 0;
  z-index: 4;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 4em;

  ${media.md`
    height: 3em;
  `};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 185px;
  margin-left: 1em;

  ${media.md`
    width: 150px;
  `};
`;

export const Logo = styled.img`
  width: 50px;
  vertical-align: middle;
  margin-right: 10px;

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
  `};
`;

export const ToggleItemsContainer = styled.div`
  display: none;

  ${media.md`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 315px;
    margin-right: 2.5em;
  `};
`;

export const SocialBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95px;
  margin: 0 1em;
`;

export const SocialIcon = styled.img`
  width: 25px;
  max-height: 25px;
  vertical-align: middle;
`;

export const DonateButton = styled(RedButton)`
  width: 130px;
  padding: 0.2em 0.9em;
  margin: 0 1em;
`;

export const Menu = styled.img`
  width: 35px;
  vertical-align: middle;
  margin-left: 1em;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavList = styled.ul`
  max-width: 300px;
  width: 50%;
  height: 75%;
  position: relative;
  top: -2rem;
`;

export const NavLink = styled.li`
  color: #f8f8f8;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  /* border-bottom: 1px solid #f8f8f8; */
  list-style: none;
  padding: 1em 0;

  &:hover,
  &:active {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const NavLinkUpper = styled(NavLink)`
  text-transform: uppercase;
`;

export const NavSeparator = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  width: 95%;
  margin: 0 auto;
  max-width: 8em;
`;
