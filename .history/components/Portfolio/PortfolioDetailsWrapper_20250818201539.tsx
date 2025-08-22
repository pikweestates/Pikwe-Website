"use client";

import React, { useEffect, useState } from "react";
import Preloader from "../Navigation/Preloader";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioInfo from "./PortfolioInfo";
import { usePreloaderGate } from "@/utils/usePreloaderGate";
import PortfolioGallery from "./PortfolioGallery";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const PortfolioDetailsWrapper = () => {
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
  const { t } = useTranslation();

  const propertyName = "Bonaberi Investment Lot";

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
      <Navbar setLocalState={setLocalState}  animationFinished={animationFinished}/>
      <PortfolioHeader animationFinished={animationFinished}/>
      <PortfolioInfo />
      <PortfolioGallery />
      <ContactFooter text={t("Portfolio:cta", { propertyName })} />
      <Footer />
    </>
  );
};

export default PortfolioDetailsWrapper;
