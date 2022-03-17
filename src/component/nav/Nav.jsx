// parent is Dashboard jsx
import "./nav.css";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/ThemeSlice";
import logo from "../../images/logo.png";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import PestControlIcon from "@mui/icons-material/PestControl";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useSelector } from "react-redux";
import {
  HamburgerMenu,
  LogoSectionStyled,
  LogoStyled,
  NavLinkSectionStyled,
  NavLinkStyled,
  NavStyled,
  ToggleThemeStyled,
} from "./Nav.style";

export const Nav = () => {
  const mobileMenu = useRef(null);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const toggleMenu = () => {
    let element = mobileMenu.current;
    if (element.style.transform === "") {
      element.style.transform = "translateX(0)";
    } else if (element.style.transform === "translateX(0px)") {
      element.style.transform = "translateX(100%)";
    } else {
      element.style.transform = "translateX(0)";
    }
  };

  return (
    <NavStyled>
      <LogoSectionStyled>
        <LogoStyled src={logo} alt="" />
        <HamburgerMenu onClick={toggleMenu} />
      </LogoSectionStyled>
      <NavLinkSectionStyled ref={mobileMenu}>
        <ToggleThemeStyled onClick={() => dispatch(toggleTheme())}>
          {theme === "dark" ? <LightModeIcon /> : <NightsStayIcon />}
        </ToggleThemeStyled>
        <NavLinkStyled to="/">
          <PestControlIcon /> Report
        </NavLinkStyled>
        <NavLinkStyled to="/">
          <PersonIcon /> Edit profile
        </NavLinkStyled>
        <NavLinkStyled to="/">
          <PowerSettingsNewIcon /> Logout
        </NavLinkStyled>
      </NavLinkSectionStyled>
    </NavStyled>
  );
};
