"use client";

import React, { useEffect, useState, useRef } from "react";
import HeroSection from '@/components/ReUsables/HeroSection'
import Preloader from '@/components/Navigation/Preloader'
import Lenis from "lenis";

const NotFoundPage = () => {
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
    <>
    
    </>
  )
}

export default NotFoundPage