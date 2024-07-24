import React from "react";
import { SocialMedia } from "./SocialMediaLayout";
import { useContext } from "react";
import Context from "@/context/context";

export const FooterLayout = () => {
  const { logo } = useContext(Context);

  const date = new Date();

  return (
    <>
      <footer className="w-full h-auto bg-white dark:bg-darkThemeAppColor border-t-2 border-primaryColor flex flex-col items-center">
        <div className="w-10/12 tablet:w-2/5 border-b-2 border-primaryColor dark:border-white flex flex-col items-center mt-10 mb-6">
          <img src={logo} alt="bestelerim.com" className="w-3/12 md:w-1/12" />
          <p className="text-black dark:text-white text-center mt-6 mb-6 font-bold">
            Siz de sevdiklerinize duygularınızı en güzel şekilde ifade
            <br />
            edebileceğiniz eşsiz besteler hediye etmek için
            <br />
            hemen aramıza katılın!
          </p>
        </div>
        <div className="text-center px-5">
          <p className="text-black dark:text-white font-bold mb-4">Türkiye</p>
          <a href="tel:+905011321090">
            <span className="text-black hover:text-primaryColor hover:dark:text-primaryColor dark:text-white font-bold transition-all">
              +90 501 132 1090
            </span>
          </a>
        </div>
        <div className="mt-6">
          <SocialMedia />
        </div>
        <div className="mt-6 w-full h-24 border-t-2 flex flex-row justify-center items-center border-primaryColor dark:border-white dark:text-white text-black font-bold ">
          Copyright © {date.getFullYear()}
          <img src={logo} alt="bestelerim.com" className="w-10 mx-2" />
          All Rights Reserved.
        </div>
      </footer>
    </>
  );
};
