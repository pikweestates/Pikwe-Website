"use client";

import React, {useEffect} from 'react'
import { useTranslation } from "react-i18next";
import Navbar from '../Navigation/Navbar'
import HeroSection from '../ReUsables/HeroSection';
import VideoPlayer from './VideoPlayer';
import RoadMap from './RoadMap';
import Lenis from "lenis";

const HomePageWrapper = () => {
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
    hero: t("HomePage:heroheader"),
    subtext: t("HomePage:herotext")
  }

  const linkData = {
    href: `${currentlocale}/contact`,
    text: t("Navigation:buttontext")
  }

  //RoadMap
  const roadHeader = {
    small: t("HomePage:roadsmall");
  h2: t("HomePage:roadh2");
  text: string;
  } 
  return (
    <>
      <Navbar/>
      <HeroSection mainData={mainData} linkData={linkData}/>
      <VideoPlayer src='/videos/homevideo.mp4'/>
      <RoadMap/>
    </>
  )
}

export default HomePageWrapper