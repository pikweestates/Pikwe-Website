"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const PrivacyPageWrapper = () => {
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
  return (
    <div>PrivacyPageWrapper</div>
  )
}

export default PrivacyPageWrapper