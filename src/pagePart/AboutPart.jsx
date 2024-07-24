import React from "react";
import { Element } from "react-scroll";
const list = [
  {
    id: 1,
    title: "Şiirlerden Beste Oluşturma : ",
    text: "Kullanıcılarımızın yazdığı şiirleri alarak, bu şiirlerden benzersiz müzik besteleri oluşturuyoruz. Bu sayede, her bir şiir melodik bir yolculuğa dönüşüyor.",
  },
  {
    id: 2,
    title: "Kelimelerden Beste Oluşturma : ",
    text: "Bize iletilen kelimeleri kullanarak, yapay zeka teknolojisi ile uyumlu ve anlamlı müzik eserleri yaratıyoruz. Kelimeleriniz, melodilere dönüşerek duygularınızı ifade etmenin yeni bir yolunu sunar.",
  },
  {
    id: 3,
    title: "Yapay Zeka Destekli Müzik Üretimi : ",
    text: "Kullandığımız yapay zeka algoritması, sektörün en ileri teknolojilerinden biri olup, size özel ve benzersiz müzikler oluşturmak için optimize edilmiştir.",
  },
  {
    id: 4,
    title: "Özel Müzik Deneyimleri : ",
    text: " Her bir beste, kullanıcılarımızın kişisel talepleri doğrultusunda özelleştirilir. Bu sayede, ortaya çıkan müzik tamamen size özel ve benzersiz olur.",
  },
];

export const AboutPart = () => {
  return (
    <Element
      name="hakkimizda"
      className="w-full element flex flex-col tablet:flex-row"
    >
      <div className="w-full  xl:px-44 2xl:px-80  text-left  my-20 text-black dark:text-white">
        <h1 className="px-5 text-4xl font-bold text-primaryColor">
          Hakkımızda
        </h1>
        <p className="px-5 mt-6 text-lg">
          2024 yılında kurulan{" "}
          <span className="font-bold hover:text-primaryColor transition-all">
            {" "}
            Bestelerim.com
          </span>
          , müzik dünyasında yenilikçi bir yaklaşım sunarak kullanıcıların
          hayallerini gerçeğe dönüştürmektedir. Kullanıcılarımızın yazmış olduğu
          şiirleri veya bize gönderecekleri kelimeleri kullanarak, yapay zeka
          destekli teknoloji sayesinde onlar adına eşsiz besteler oluşturuyoruz.
          Amacımız, herkesin içinde taşıdığı duyguları ve düşünceleri müziğe
          dökebilmesine olanak tanımaktır. Profesyonel ekibimiz ile, her şiir ve
          kelimeyi sanatsal bir esere dönüştürerek, müşterilerimize benzersiz
          bir deneyim sunuyoruz. Siz de
          <span className="font-bold hover:text-primaryColor transition-all">
            {" "}
            Bestelerim.com
          </span>{" "}
          ile kendi hikayenizi müziğe dökün ve duygularınızı melodilere
          dönüştürün!
        </p>
        <h1 className="px-5 text-4xl font-bold text-primaryColor mt-12">
          Neler Yapıyoruz?{" "}
        </h1>
        <p className="px-5  my-6 text-lg">
          <span className="font-bold hover:text-primaryColor transition-all">
            {" "}
            Bestelerim.com
          </span>{" "}
          olarak, müzik ve teknolojiyi bir araya getirerek kullanıcılarımızın
          duygularını ve düşüncelerini melodilere dönüştürüyoruz. 2024 yılında
          kurulan firmamız, müşterilerimizin yazdığı şiirleri veya bize
          gönderecekleri kelimeleri kullanarak yapay zeka destekli besteler
          oluşturma hizmeti sunmaktadır. İşte yaptığımız hizmetler :
        </p>
        <ul className="list-decimal px-10 laptop:px-20 ">
          {list.map((data) => {
            return (
              <div key={data.id} className="flex flex-row text-wrap	mb-5">
                <p className="w-full">
                  <span className="font-bold list-item">{data.title}</span>
                  {data.text}
                </p>
              </div>
            );
          })}
        </ul>
        <p className="px-5 my-7 text-lg">
          <span className="font-bold hover:text-primaryColor transition-all">
            {" "}
            Bestelerim.com
          </span>{" "}
          olarak, müziğin gücünü ve teknolojinin imkanlarını kullanarak, her
          kullanıcıya özel, unutulmaz müzik deneyimleri sunmak için buradayız.
          Sizin de duygularınızı melodilere dönüştürmemize izin verin!
        </p>
      </div>
    </Element>
  );
};
