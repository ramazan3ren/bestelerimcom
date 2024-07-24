import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center ">
      <div className="flex flex-row mb-5 text-primaryColor dark:text-white">
        <h1 className="font-josefin text-9xl mr-5">4</h1>
        <h1 className="font-josefin text-9xl mr-5">0</h1>
        <h1 className="font-josefin text-9xl">4</h1>
      </div>
      <h2 className="font-open text-md text-center lg:text-2xl mb-10 dark:text-white">
        Oops! Maalesef Böyle Bir Sayfa Bulunamadı
      </h2>
      <Link
        to="/"
        className="mb-5 py-3 px-6 text-md lg:text-xl rounded-full bg-black text-white hover:bg-primaryColor dark:hover:bg-primaryColor dark:hover:text-white transition-all dark:bg-white dark:text-black "
      >
        Bestelere Geri Dön
      </Link>
    </div>
  );
};
