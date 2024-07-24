import React from "react";

import { Element } from "react-scroll";
import { Input } from "@/components/Input";

import { TelephoneInput } from "@/components/TelephoneInput";
import { Link } from "react-router-dom";

import axios from "axios";
import { CopyComponent } from "@/components/CopyComponent";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useContext } from "react";
import Context from "@/context/context";
import { KvkkDialog } from "@/components/Dialog";
import { useState } from "react";
import { AlertDialog } from "@/components/AlertDialog";

export const MusicForm = () => {
  const onClickEvent = () => {
    handleDialogOpen();
  };
  const { handleDialogOpen, isChecked, phone, setOpenAlertDialog } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const [desc, setDesc] = useState("");
  const [poems, setPoems] = useState("");

  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (validateEmail(value)) {
      setError(false);
      setHelperText("");
    } else {
      setError(true);
      setHelperText("Lütfen e-posta adresinizi düzgün bir biçimde giriniz!");
    }
  };

  const emailContent = `
  <html dir="ltr" lang="en">
    <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    </head>
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      Yeni Bir Beste İsteği
    </div>
    <body style="background-color:rgb(255,255,255);margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;font-family:Montserrat">
      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:465px;border-radius:0.25rem;margin-top:40px;margin-bottom:40px;margin-left:auto;margin-right:auto;padding:20px">
        <tbody>
          <tr style="width:90%">
            <td>
              <span style="font-size:14px;margin:16px 0;color:rgb(0,0,0)">
                <span style="font-weight:700">
                  Ad - Soyad : <span style="color:rgb(220,39,43);font-weight:700">${nameSurname}</span>
                </span>
                <br /><br />
                <span style="font-weight:700">
                  E-posta : <span style="color:rgb(220,39,43);font-weight:700">${email}</span>
                </span>
                <br /><br />
                <span style="font-weight:700">
                  Telefon Numarası : <span style="color:rgb(220,39,43);font-weight:700">${phone}</span>
                </span>
                <br /><br />
                <span style="font-weight:700">
                  KVKK Onay : <span style="color:rgb(220,39,43);font-weight:700">${
                    isChecked ? "Onaylandı" : "Onaylanmadı"
                  }</span>
                </span>
                <br /><br />
                <span style="font-weight:700">
                  Açıklama : <span style="color:rgb(220,39,43);font-weight:700">${desc}</span>
                </span>
                <br /><br />
                <span style="font-weight:700;height:auto">
                  Şiir : <span style="color:rgb(220,39,43);font-weight:700">${poems}</span>
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  `;

  const handlePostRequest = async (event) => {
    event.preventDefault();

    if (!error && email) {
      const response = await axios
        .post("/api/compositions", emailContent)
        .catch((error) => {
          console.error("Error:", error);
        });
      setOpenAlertDialog(true);
    }
  };

  return (
    <>
      <Element
        name="muzik"
        className="w-full element flex flex-col tablet:flex-row"
      >
        <AlertDialog />
        <KvkkDialog />
        <div className="w-full bg-whiteBG dark:bg-black py-28 px-4 lg:py-20 lg:mt-16 ">
          <form className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-5xl font-bold font-josefin text-primaryColor mb-10">
              Müziğini Keşfet
            </h1>
            <div className="w-full xl:w-2/3 2xl:w-1/2 flex flex-col items-center bg-white rounded-2xl dark:bg-whiteBG">
              <div className="flex flex-col lg:flex-row px-4 lg:px-12 pt-10 pb-2 lg:pb-4">
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                  <CopyComponent
                    inputLabel="Ödeme Yapacağınız IBAN"
                    value="TR47 0006 4000 0014 5150 5110 30"
                  />
                  <CopyComponent
                    inputLabel="IBAN Sahibi Adı Soyadı"
                    value="Ramazan Eren Kocabaş"
                  />
                  <div className="mb-2">
                    <span className="text-sm select-none text-primaryColor font-bold">
                      <p>
                        Hazır bir şiiriniz varsa, beste yapma hizmetimiz için
                        300 TL; eğer bizim bir şiir yazıp beste yapmamızı
                        istiyorsanız 400 TL ücret almaktayız.
                      </p>
                      <p className="mt-2">
                        Lütfen belirtilen tutarı yukarıdaki IBAN numarasına
                        ödedikten sonra, tüm kutucukları eksiksiz ve gerçek
                        bilgilerle doldurarak bize gönderin.
                      </p>
                    </span>
                  </div>
                  <Input
                    required
                    name={"email"}
                    color={"error"}
                    type={"email"}
                    disabled={false}
                    isMultiline={false}
                    labelError={helperText}
                    label={"E-posta"}
                    error={error}
                    onChange={handleEmailChange}
                  />
                  <Input
                    name={"nameSurname"}
                    color={"error"}
                    type={"text"}
                    disabled={false}
                    isMultiline={false}
                    labelError={"Lütfen Adınızı Soyadınızı Giriniz!"}
                    label={"Adınız ve Soyadınız"}
                    onChange={(event) => {
                      setNameSurname(event.target.value);
                    }}
                  />
                  <TelephoneInput />
                  <Input
                    name={"desc"}
                    color={"error"}
                    type={"text"}
                    disabled={false}
                    isMultiline={true}
                    maxRows={8.11111111111}
                    maxLength={500}
                    placeholder={
                      "Ödeme Yaptığınız Hesap Sahibinin Adını Giriniz!"
                    }
                    labelError={
                      "Ödeme Yaptığınız Hesap Sahibinin Adını Giriniz!"
                    }
                    label={"Açıklama"}
                    onChange={(event) => {
                      setDesc(event.target.value);
                    }}
                  />
                </div>
                <div className="w-full lg:w-1/2 lg:ml-5">
                  <Input
                    name={"poems"}
                    color={"error"}
                    type={"text"}
                    disabled={false}
                    isMultiline={true}
                    maxRows={18.4}
                    minRows={18.4}
                    maxLength={2000}
                    // labelError={errors != null ? errors.email : null}
                    label={"Şiir ya da En Az 10 Kelime Girin"}
                    onChange={(event) => {
                      setPoems(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    required
                    className="select-none"
                    onClick={onClickEvent}
                    control={
                      <Checkbox
                        checked={isChecked}
                        sx={{
                          "&.Mui-checked": {
                            color: "#dc272b",
                          },
                        }}
                      />
                    }
                    label="6698 Sayılı Kişisel Verilerin Korunması Kanunu uyarınca hazırlanan Aydınlatma Metni’ni okudum."
                  />
                </div>
              </div>
              <button
                disabled={
                  email === null ||
                  nameSurname === null ||
                  desc === null ||
                  isChecked == false ||
                  phone === null
                }
                onClick={handlePostRequest}
                className="disabled:bg-opacity-50 disabled:bg-primaryColor py-3 px-6 text-white bottom-3 rounded-full mb-5 text-center bg-primaryColor hover:bg-red-900 transition-all"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </Element>
    </>
  );
};
