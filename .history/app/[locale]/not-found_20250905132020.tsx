"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "@/components/ReUsables/HeroSection";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter, useParams } from "next/navigation";
import Preloader from "@/components/Navigation/Preloader";
import Lenis from "lenis";

import { Metadata } from "next";

//MetaData
export function generateMetadata(): Metadata {
  // read route params
  
  
  return {
    title: currentlocale==="en" ? "404 - Page not found" : "404 - Page non trouvé",
  description:
    "This page isn’t here. Return to Pikwe Estates’s homepage or discover our land sourcing and development offerings.",
  };
}

export const metadata: Metadata = {

};

const NotFoundPage = () => {
  const router = useRouter();

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
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //HeroSection
  const mainData = {
    hero: t("HomePage:404"),
    subtext: t("HomePage:404text"),
  };
  

  return (
    <>
      <Head>
        <title>{currentlocale==="en" ? "404 - Page not found" : "404 - Page non trouvé"}</title>
        <meta
          name="description"
          content="Oops, we can’t find that page. Head back to the homepage or explore our listings."
        />
      </Head>
      <Preloader
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />

      <HeroSection
        mainData={mainData}
        animationFinished={animationFinished}
        height="90vh"
        onClick={() => router.back()}
      />
    </>
  );
};

export default NotFoundPage;
