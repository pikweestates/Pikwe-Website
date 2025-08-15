"use client";

import React, { useEffect, useState, useRef } from "react";
import Preloader from "../Navigation/Preloader";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import PrivacySection from "./PrivacySection";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const PrivacyPageWrapper = () => {
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
    hero: t("About:privacy"),
    subtext: t("About:privacytext"),
  };

  const scrollData = {
    lenis: lenis,
    reference: containerRef,
    text: t("About:privacylink"),
  };

  //Preloader Management
  const [animationFinished, setAnimationFinished] = useState(false);
  const [localstate, setLocalState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("myState") || "Initial State";
    } else {
      return "Initial State";
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("myState", localstate);
    }
  }, [localstate]);

  useEffect(() => {
    if (animationFinished) {
      setLocalState("Initial State");
    }
  }, [animationFinished]);

  return (
    <>
      <Preloader
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />
      <Navbar setLocalState={setLocalState} animationFinished={animationFinished}/>
      <HeroSection mainData={mainData} scrollData={scrollData} animationFinished={animationFinished}/>
      <PrivacySection ref={containerRef} />
      <Footer />
    </>
  );
};

export default PrivacyPageWrapper;
