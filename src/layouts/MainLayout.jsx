import React from "react";
import { HeaderLayout } from "./HeaderLayout";
import { FooterLayout } from "./FooterLayout";
import { EntrancePart } from "@/pagePart/EntrancePart";
import { MusicForm } from "@/pagePart/MusicForm";
import { AboutPart } from "@/pagePart/AboutPart";
import { ContactsPart } from "@/pagePart/ContactsPart";

export const MainLayout = () => {
  return (
    <>
      <HeaderLayout />
      <EntrancePart />
      <MusicForm />
      <AboutPart />
      <ContactsPart />
      <FooterLayout />
    </>
  );
};
