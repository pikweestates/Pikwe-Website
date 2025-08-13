"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import HomeSolutions from "./HomeSolutions";
import VideoPlayer from "./VideoPlayer";
import RoadMap from "./RoadMap";
import HomePortfolio from "./HomePortfolio";
import HomeInsights from "./HomeInsights";
import WhyChoose from "./WhyChoose";
import Vision from "./Vision";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const HomePageWrapper = () => {
  //Lenis State
  const [lenis, setLenis] = useState<Lenis | null>(null);


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

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);


  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //HeroSection
  const mainData = {
    hero: t("HomePage:heroheader"),
    subtext: t("HomePage:herotext"),
  };

  const linkData = {
    href: `${currentlocale}/contact`,
    text: t("Navigation:buttontext"),
  };


  return (
    <>
      <Navbar />
      <HeroSection mainData={mainData} linkData={linkData} height=""/>
      {/* <VideoPlayer src="/videos/homevideo.mp4" />
      <RoadMap />
      <HomePortfolio />
      <HomeSolutions lenis={lenis}/>
      <Vision />
      <WhyChoose />
      <HomeInsights />
      <ContactFooter text={t("HomePage:homeready")}/> */}
      <Footer />
    </>
  );
};

export default HomePageWrapper;
