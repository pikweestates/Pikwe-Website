"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const ServicesPageWrapper = () => {
//Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.25,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);


  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //HeroSection
  const mainData = {
    hero: t("HomePage:insighth2"),
    subtext: t("Blog:herotext"),
  };

  const scrollData = {
    
    text: t("HomePagebuttontext"),
  };
  return (
    <>
      <Navbar />
      <HeroSection mainData={mainData} linkData={scrollData} />
      <ContactFooter text={t("HomePage:homeready")}/>
      <Footer />
    </>
  )
}

export default ServicesPageWrapper