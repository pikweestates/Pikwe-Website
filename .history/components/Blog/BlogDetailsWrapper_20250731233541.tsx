"use client";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import BlogHeader from "./BlogHeader";
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
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <BlogHeader />
      <OtherBlogs />
      <ContactFooter text={t("HomePage:homeready")}/>
      <Footer />
    </>
  );
};

export default BlogDetailsWrapper;
