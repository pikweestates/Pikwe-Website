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
import { usePreloaderGate } from "@/utils/usePreloaderGate";
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

    // Pathname and visited-pages logic
    const pathname = usePathname();
    const pageKey = pathname || "unknown";
  
    // Compute whether to show preloader for this page
    const computeShouldShow = (pageKeyArg: string, localStateArg: string) => {
      if (localStateArg === "Translating State") return true;
      try {
        const raw = sessionStorage.getItem("visitedPages");
        const visited = raw ? JSON.parse(raw) : ({} as Record<string, number>);
        const ts = visited[pageKeyArg];
        if (!ts) return true; // not visited -> show
        const expired = Date.now() - ts > VISIT_EXPIRY_MS;
        return expired; // show only if entry expired
      } catch {
        return true;
      }
    };
  
    // shouldShowPreloader initial computed synchronously
    const [shouldShowPreloader, setShouldShowPreloader] = useState<boolean>(() => {
      if (typeof window === "undefined") return true;
      return computeShouldShow(pageKey, localstate);
    });
  
    // If the page was already visited (shouldShowPreloader === false) => refresh its timestamp immediately
    useEffect(() => {
      if (typeof window === "undefined") return;
      try {
        const raw = sessionStorage.getItem("visitedPages");
        const visited = raw ? JSON.parse(raw) : ({} as Record<string, number>);
        if (!computeShouldShow(pageKey, localstate)) {
          // already visited and not expired => refresh timestamp
          visited[pageKey] = Date.now();
          sessionStorage.setItem("visitedPages", JSON.stringify(visited));
        }
      } catch {
        // ignore
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageKey, localstate]);
  
    // When a preloader runs and finishes (animationFinished === true) and preloader was shown,
    // mark this page as visited (so next time in same session the preloader will be skipped)
    useEffect(() => {
      if (!animationFinished) return;
      // If we rendered the preloader for this visit (shouldShowPreloader true at mount), mark visited
      // Note: if we didn't show (shouldShowPreloader was false), we already refreshed the timestamp above.
      try {
        const raw = sessionStorage.getItem("visitedPages");
        const visited = raw ? JSON.parse(raw) : ({} as Record<string, number>);
        visited[pageKey] = Date.now();
        sessionStorage.setItem("visitedPages", JSON.stringify(visited));
        // After finishing animation for this visit, flip shouldShowPreloader to false to avoid re-showing
        setShouldShowPreloader(false);
      } catch {
        // ignore
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animationFinished]);
  
    // Recompute shouldShowPreloader when pathname or localstate change (but don't flip to false mid-animation)
    useEffect(() => {
      if (typeof window === "undefined") return;
      const initial = computeShouldShow(pageKey, localstate);
      setShouldShowPreloader(initial);
      // do NOT write visited timestamp here if initial === true (we wait until animationFinished)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageKey, localstate]);
  
    // If the animationFinished flag is true, clear the flag after short delay so components depending on it can react safely.
    useEffect(() => {
      if (animationFinished) {
        // you already used this flag elsewhere; keep typical behaviour
        // (no automatic reset here, you may reset when appropriate)
      }
    }, [animationFinished]);
  
    // In your original code you set animationFinished true -> setLocalState("Initial State")
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
        shouldShowPreloader={shouldShowPreloader}
      />
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
