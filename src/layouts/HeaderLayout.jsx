import React from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { updateLogoUrl, updateLogoAlt } from '@/actions/Actions';

export const HeaderLayout = () => {
  //   const {
  //     darkSide,
  //     toggleDarkMode,
  //     logo,
  //     isOpen,
  //     setOpen,
  //     setOpenMobileMenu,
  //     openMobileMenu,
  //   } = useContext(Context);

  const logo = useSelector((state) => state.path);

  return (
    <>
    <img src={logo} alt="" />
    </>
  );
};
