"use client";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import ContactFooter from "../ReUsables/ContactFooter";
import WhyChoose from "../HomePage/WhyChoose";
import AboutVision from "./AboutVision";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";
import AboutQuote from "./AboutQuote";

const AboutPageWrapper = () => {
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
    hero: t("About:heroh2"),
    subtext: t("About:herotext"),
  };

  const linkData = {
    href: `/${currentlocale}/portfolio`,
    text: t("HomePage:portlink"),
  };

  return (
    <>
      <Navbar />
      <HeroSection mainData={mainData} linkData={linkData} />
      <AboutVision />
      <AboutQuote />
      <WhyChoose />
      <TeamSection />
      <ContactFooter text={t("HomePage:homeready")}/>
      <Footer />
    </>
  )
}

export default AboutPageWrapper