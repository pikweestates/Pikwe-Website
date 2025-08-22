"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import HomeSolutions from "./HomeSolutions";
import VideoPlayer from "./VideoPlayer";
import RoadMap from "./RoadMap";
import HomePortfolio from "./HomePortfolio";
import HomeInsights from "./HomeInsights";
// import { usePreloaderGate } from "@/utils/usePreloaderGate";
import Vision from "./Vision";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";
import Preloader from "../Navigation/Preloader";

const VISIT_EXPIRY_MS = 1000 * 60 * 60 * 2; // 2 hours (change to 3600000 for 1 hour)

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

  // In your original code you set animationFinished true -> setLocalState("Initial State")
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

  return (
    <>
      {isFirstVisit && localstate==="Translating State" && (
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
