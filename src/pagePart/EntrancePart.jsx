import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import photo from "@/assets/entrance-part.png";
import { Element } from "react-scroll";
import { scroller } from "react-scroll";

export const EntrancePart = () => {
  const scrollTo = () => {
    scroller.scrollTo("muzik", {
      duration: 800,
      delay: 0,
      offset: -35,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Element
        name="anasayfa"
        className=" w-full element flex flex-col tablet:flex-row"
      >
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center bg-white dark:bg-darkThemeColor py-28 px-4 lg:py-36 lg:mt-16 ">
          <div className="text-black dark:text-white w-80 lg:w-[400px] xl:mr-16 mr-0 mt-7 lg:mt-0 xl:[zoom:1.2]">
            <div className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl w-full ">
              Sizde{" "}
              <span className="font-semibold font-josefin hover:text-primaryColor transition-all">
                Bestelerim.com
              </span>
              {"  "}
              ile
              <br />
              <TypeAnimation
                sequence={[
                  "Sevgilinize",
                  1000,
                  "Annenize",
                  1000,
                  "Babanıza",
                  1000,
                  "Öğretmeninize",
                  1000,
                  "Doğum Günlerine",
                  1000,
                ]}
                speed={20}
                className="inline-block text-primaryColor text-lg sm:text-xl md:text-2xl lg:text-4xl"
                repeat={Infinity}
              />
              <br />
              <span className="whitespace-nowrap">
                kısacası tüm sevdiklerinize...
              </span>
            </div>
            <p className="font-bold text-sm md:text-md pt-4 w-full ">
              Sevdiklerinize özel anılar yaşatmak için buradayız! İster kendi
              yazdığınız bir şiiri bestelemek isteyin, ister birkaç kelimeyle
              duygularınızı iletin, biz sizin adınıza özel şiirleri
              besteleyelim. Unutulmaz anlar ve kalıcı hatıralar için bizi tercih
              edin.
            </p>
            <div className="flex flex-row justify-center lg:justify-start mt-6">
              <button
                onClick={() => scrollTo()}
                className="bg-primaryColor px-5 py-3 mr-4 text-white rounded-full"
              >
                Müziğini Keşfet
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full md:w-[400px] lg:w-[450px] lg:p-0 p-10">
            <img src={photo} />
          </div>
        </div>
      </Element>
    </>
  );
};
