import React from "react";
import Context from "@/context/context";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuButton } from "@/components/MenuButton";
import { MenuButtonMobile } from "@/components/MenuButtonMobile";
import { BsYoutube } from "react-icons/bs";

export const HeaderLayout = () => {
  const {
    darkSide,
    toggleDarkMode,
    logo,
    isOpen,
    setOpen,
    setOpenMobileMenu,
    openMobileMenu,
  } = useContext(Context);

  return (
    <>
      <header className="top-0 left-0 right-0 fixed h-24 w-full flex flex-row justify-between items-center bg-white dark:bg-darkThemeAppColor shadow-lg z-50">
        <Link className="ml-5 sm:ml-11 md:ml-16 lg:ml-24 xl:ml-36 " to="/">
          <img src={logo} alt="bestelerim.com" className="w-24 md:w-" />
        </Link>
        <div className="flex flex-row justify-center items-center">
          <div className="block lg:hidden p-2 rounded-md mr-1 z-50">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              color={darkSide == true ? "white" : "black"}
              onToggle={(toggled) => {
                if (toggled) {
                  setOpenMobileMenu(true);
                } else {
                  setOpenMobileMenu(false);
                }
              }}
            />
          </div>
          <div className="hidden lg:block mr-3">
            <ul className="flex flex-row">
              <MenuButton name="Ana Sayfa" to="anasayfa" offset={-50} />
              <MenuButton name="Müziğini Keşfet" to="muzik" offset={-35} />
              <MenuButton name="Hakkımızda" to="hakkimizda" offset={-55} />
              <MenuButton name="İletişim" to="iletisim" offset={-55} />
            </ul>
          </div>

          <div className="mr-5 flex justify-center items-center border-l border-l-gray-400 sm:mr-10 md:mr-12 lg:mr-12 transition-none">
            <DarkModeSwitch
              className="ml-5 transition-none"
              checked={darkSide}
              onChange={toggleDarkMode}
              size={30}
            />
            <a className="text-3xl ml-4 text-black hover:text-primaryColor dark:text-white dark:hover:text-primaryColor transition-all" href="https://www.youtube.com/@bestelerimcom" target="_blank">
              <BsYoutube />
            </a>
          </div>
        </div>
      </header>
      <div
        className={`bg-primaryColor  dark:bg-darkThemeAppColor dark:text-white text-white z-50 ${
          openMobileMenu == true
            ? "w-screen h-screen fixed top-24"
            : "w-0 h-0 hidden"
        }`}
      >
        <div>
          <ul className="flex flex-col items-center h-screen">
            <MenuButtonMobile name="Ana Sayfa" to="anasayfa" />
            <MenuButtonMobile name="Müziğini Keşfet" to="muzik" />
            <MenuButtonMobile name="Hakkımızda" to="hakkimizda" />
            <MenuButtonMobile name="İletişim" to="iletisim" />
          </ul>
        </div>
      </div>
    </>
  );
};
