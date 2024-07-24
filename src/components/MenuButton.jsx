import React from "react";
import { scroller } from "react-scroll";

export const MenuButton = ({ name, to, offset }) => {
  const scrollTo = () => {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      offset: offset,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <li>
      <button className="nav-link" onClick={() => scrollTo()}>
        {name}
      </button>
    </li>
  );
};
