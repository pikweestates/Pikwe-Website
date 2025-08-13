"use client";

import React, {useEffect} from 'react'
import { useTranslation } from "react-i18next";
import Navbar from '../Navigation/Navbar'
import HeroSection from '../ReUsables/HeroSection';
import Lenis from "lenis";

const HomePageWrapper = () => {
  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);




  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const mainData = {
    hero: t("HomePage:heroheader"),
    subtext: t("HomePage:herotext")
  }

  const linkData = {
    href: `${currentlocale}/contact`,
    text: t("Navigation:buttontext")
  }

  return (
    <>
      <Navbar/>
      <HeroSection mainData={mainData} linkData={linkData}/>
    </>
  )
}

export default HomePageWrapper