"use client";

import React, { useEffect, useState } from "react";
import Preloader from "../Navigation/Preloader";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioInfo from "./PortfolioInfo";
import PortfolioGallery from "./PortfolioGallery";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

export interface Property {
  _id: string;
  mainimage: {
    alt: string;
  };
  slug: {
    current: string;
  };
  location: string;
  price: number;
  surfacearea: number;
  reference: {
    current: string
  };
  name: string;
  landstatuss: {
    name: string,
    namefr: string
  },
  detailsen: string,
  detailsfr: string,
  images: {
    alt: string;
  }[],
}



const PortfolioDetailsWrapper = ({post}: {post: Property}) => {
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

  return (
    <>
      <Preloader
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />

      <Navbar
        setLocalState={setLocalState}
        animationFinished={animationFinished}
      />
      <PortfolioHeader animationFinished={animationFinished} />
      <PortfolioInfo />
      <PortfolioGallery />
      <ContactFooter text={t("Portfolio:cta", { propertyName })} />
      <Footer />
    </>
  );
};

export default PortfolioDetailsWrapper;
