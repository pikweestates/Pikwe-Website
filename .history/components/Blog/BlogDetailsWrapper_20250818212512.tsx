"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import OtherBlogs from "./OtherBlogs";
import BlogHeader from "./BlogHeader";
import Preloader from "../Navigation/Preloader";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const BlogDetailsWrapper = () => {
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


  return (
    <>

        <Preloader
          setAnimationFinished={setAnimationFinished}
          localState={localstate}
        />
      )}
      <Navbar setLocalState={setLocalState} animationFinished={animationFinished}/>
      <BlogHeader animationFinished={animationFinished}/>
      <OtherBlogs />
      <ContactFooter text={t("HomePage:homeready")}/>
      <Footer />
    </>
  );
};

export default BlogDetailsWrapper;
