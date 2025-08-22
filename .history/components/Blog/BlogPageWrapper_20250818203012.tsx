"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import ContactFooter from "../ReUsables/ContactFooter";
import BlogSection from "./BlogSection";
import Preloader from "../Navigation/Preloader";
import { usePreloaderGate } from "@/utils/usePreloaderGate";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const BlogPageWrapper = () => {
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
    hero: t("HomePage:insighth2"),
    subtext: t("Blog:herotext"),
  };

  const scrollData = {
    lenis: lenis,
    reference: containerRef,
    text: t("Blog:herolink"),
  };

      //Preloader Management
      const [animationFinished, setAnimationFinished] = useState(false);
      const [localstate, setLocalState] = useState(() => {
        if (typeof window !== 'undefined') {
          return localStorage.getItem('myState') || 'Initial State';
        } else {
          return 'Initial State';
        }
      });
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('myState', localstate);
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
      <Navbar setLocalState={setLocalState} animationFinished={animationFinished}/>
      <HeroSection mainData={mainData} scrollData={scrollData} animationFinished={animationFinished}/>
      <BlogSection ref={containerRef} />
      <ContactFooter text={t("HomePage:homeready")} />
      <Footer />
    </>
  );
};

export default BlogPageWrapper;
