"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import Footer from "../Navigation/Footer";
import Preloader from "../Navigation/Preloader";
import FormSection from "./FormSection";
import InfoSection from "./InfoSection";
import Lenis from "lenis";

const ContactPageWrapper = () => {
  //Lenis State
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
  const { t } = useTranslation();
  // const currentlocale = i18n.language;

  //HeroSection
  const mainData = {
    hero: t("Navigation:contacth2"),
    subtext: t("Navihation:contactp"),
  };

  const scrollData = {
    lenis: lenis,
    reference: containerRef,
    text: t("Navigation:fillout"),
  };


  return (
    <>
            <Preloader
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />
      <Navbar setLocalState={setLocalState} />
      <HeroSection mainData={mainData} scrollData={scrollData} />
      <FormSection ref={containerRef}/>
      <InfoSection />
      <Footer />
    </>
  )
}

export default ContactPageWrapper