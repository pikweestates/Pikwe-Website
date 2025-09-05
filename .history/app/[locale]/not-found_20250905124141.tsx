"use client";

import React, { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/ReUsables/HeroSection";
import { useTranslation } from "react-i18next";
import Preloader from "@/components/Navigation/Preloader";
import Lenis from "lenis";

const NotFoundPage = () => {
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

    //Translations
    const { t } = useTranslation();
    // const currentlocale = i18n.language;
  
    //HeroSection
    const mainData = {
      hero: t("HomePage:404"),
      subtext: t("HomePage:herotext"),
    };

    // const linkData = {
    //   href: `${currentlocale}/contact`,
    //   text: t("Navigation:buttontext"),
    // };

  return (
    <>
      <Preloader
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />

      <HeroSection
        mainData={mainData}
        animationFinished={animationFinished}
        height="90vh"
      />
    </>
  );
};

export default NotFoundPage;
