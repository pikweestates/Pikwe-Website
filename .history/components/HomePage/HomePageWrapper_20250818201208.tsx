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
import { usePreloaderGate } from "@/utils/usePreloaderGate";
import Vision from "./Vision";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";
import Preloader from "../Navigation/Preloader";

const HomePageWrapper = () => {
  //Lenis State
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [animationFinished, setAnimationFinished] = useState(false);

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

  //Preloader Management
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
  

  // Gate decides visibility + marking
  const { showPreloader, onFinished } = usePreloaderGate(localstate);

  useEffect(() => {
    if (!showPreloader) {
      // We’re not showing a preloader for this route:
      // 1) mark the animation as finished for this page render
      // 2) mark the route as visited
      setAnimationFinished(true);
      onFinished();
    } else {
      // We will show a preloader; reset the flag so downstream UI waits for it
      setAnimationFinished(false);
    }
  }, [showPreloader, onFinished, setAnimationFinished]);

  useEffect(() => {
    if (animationFinished && showPreloader) {
      onFinished(); // when the real preloader finishes
    }
  }, [animationFinished, showPreloader, onFinished]);

  return (
    <>
      {showPreloader && (
        <Preloader
          setAnimationFinished={setAnimationFinished}
          localState={localstate}
        />
      )}
      <Navbar
        setLocalState={setLocalState}
        animationFinished={animationFinished}
      />
      <HeroSection
        mainData={mainData}
        linkData={linkData}
        animationFinished={animationFinished}
      />
      <VideoPlayer src="/videos/homevideo.mp4" />
      <RoadMap />
      <HomePortfolio />
      <HomeSolutions lenis={lenis} />
      <Vision />
      {/* <WhyChoose /> */}
      <HomeInsights />
      <ContactFooter text={t("HomePage:homeready")} />
      <Footer />
    </>
  );
};

export default HomePageWrapper;
