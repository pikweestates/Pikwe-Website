"use client";

import React, { useEffect, useState } from "react";
import Preloader from "../Navigation/Preloader";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import ContactFooter from "../ReUsables/ContactFooter";
import AboutVision from "./AboutVision";
import Footer from "../Navigation/Footer";
import TeamSection from "./TeamSection";
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


  //INITIAL VISIT MANAGMENT
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initially = localStorage.getItem("isFirstVisit");

      if (initially === null) {
        setTimeout(() => {
          localStorage.setItem("isFirstVisit", "true");
          setIsFirstVisit(true);
        }, 0);
      } else {
        setIsFirstVisit(false);
      }

      const handleBeforeUnload = () => {
        localStorage.removeItem("isFirstVisit");
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  // If preloader is NOT showing, mark animation finished so the page shows
  useEffect(() => {
    const preloaderShouldShow = isFirstVisit || localstate === "Translating State";
    if (!preloaderShouldShow) {
      // ensure the rest of the UI can animate in / render immediately
      setAnimationFinished(true);
    }
    // if preloader should show, we rely on the Preloader component to call setAnimationFinished(true)
  }, [isFirstVisit, localstate]);

  return (
    <>
      {(isFirstVisit || localstate === "Translating State") && (
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
      <AboutVision />
      <AboutQuote />
      <TeamSection />
      <ContactFooter text={t("HomePage:homeready")} />
      <Footer />
    </>
  );
};

export default AboutPageWrapper;
