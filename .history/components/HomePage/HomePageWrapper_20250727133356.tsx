"use client";

import React from 'react'
import { useTranslation } from "react-i18next";
import Navbar from '../Navigation/Navbar'
import HeroSection from '../ReUsables/HeroSection';

const HomePageWrapper = () => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const mainData = {
    hero: t("HomePage:heroheader"),
    subtext: t("HomePage:herotext")
  }

  const linkData = {
    href: `${currentlocale}`
  }

  return (
    <>
      <Navbar/>
      <HeroSection mainData={mainData} linkData={}/>
    </>
  )
}

export default HomePageWrapper