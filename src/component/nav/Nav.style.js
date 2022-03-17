import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const NavStyled = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.dashboardNavBackground};
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 580px) {
  }
`;
export const LogoSectionStyled = styled.div`
  flex: 30%;
  @media (max-width: 580px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HamburgerMenu = styled(MenuIcon)`
  display: none;
  @media (max-width: 580px) {
    display: block;
    color: #fff;
    font-size: 32px !important;
    margin-right: 0.4rem;
    cursor: pointer;
  }
`;
export const NavLinkSectionStyled = styled.div`
  flex: 70%;
  text-align: end;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.2s linear;

  @media (max-width: 580px) {
    flex-direction: column;
    position: absolute;
    right: 0;
    background: ${({ theme }) => theme.mobileMenuBg};
    align-items: flex-end;
    top: 50px;
    height: 200px;
    justify-content: center;
    width: 172px;
    border-radius: 0 0 0 122px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: translateX(100%);
  }
`;
export const LogoStyled = styled.img`
  width: 34px;
  margin-left: 1rem;
`;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  border-bottom: 2px solid transparent;
  border-left: 2px solid ${({ theme }) => theme.navLinkColor};
  padding-bottom: 3px;
  padding-left: 0.3rem;
  font-size: 15px;
  font-weight: bold;
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.navLinkColor};
  display: flex;
  align-items: center;
  transition: all 0.7s linear;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid gold;
  }
  @media (max-width: 580px) {
    border-left: none;
    margin: 10px 0;
    color: ${({ theme }) => theme.mobileNavLinkColor};
  }

  svg {
    margin-right: 5px;
    font-size: 20px;
  }
`;

export const ToggleThemeStyled = styled.button`
  background: none;
  border: none;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.themeIcon};
  transition: all 0.7s linear;
  cursor: pointer;
  @media (max-width: 580px) {
    margin: 0;
    color: ${({ theme }) => theme.mobileThemeIcon};
  }
`;
