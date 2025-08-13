"use client";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import ContactFooter from "../ReUsables/ContactFooter";
import ServicesSection from "./ServicesSection";
import RoadMap from "../HomePage/RoadMap";
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
    hero: t("HomePage:slogan"),
    subtext: t("HomePage:servicestext"),
  };

  const linkData = {
    href: `/${currentlocale}/contact`,
    text: t("HomePage:buttontext"),
  };
  
  return (
    <>
      <Navbar />
      <HeroSection mainData={mainData} linkData={linkData} />
      <ServicesSection />
      <RoadMap />
      <ContactFooter text={t("HomePage:homeready")}/>
      <Footer />
    </>
  )
}

export default ServicesPageWrapper