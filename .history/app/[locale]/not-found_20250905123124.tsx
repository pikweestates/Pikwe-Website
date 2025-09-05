"use client";

import React, { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/ReUsables/HeroSection";
import Preloader from "@/components/Navigation/Preloader";
import Lenis from "lenis";

const NotFoundPage = () => {
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
  return (
    <>
      <Preloader
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />
      
    </>
  );
};

export default NotFoundPage;
