import Context from "@/context/context";
import React from "react";
import { useContext } from "react";
import { scroller } from "react-scroll";

export const MenuButtonMobile = ({ name, to }) => {
  const { setOpen, setOpenMobileMenu, openMobileMenu } = useContext(Context);

  const scrollTo = () => {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      offset: -96,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <li className="nav-link-dropdown">
      <button
        onClick={() => {
          setOpenMobileMenu(!openMobileMenu);
          setOpen(!openMobileMenu);
          scrollTo();
        }}
      >
        {name}
      </button>
    </li>
  );
};
