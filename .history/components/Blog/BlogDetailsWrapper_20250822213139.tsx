"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import OtherBlogs from "./OtherBlogs";
import BlogCopy from "./BlogCopy";
import BlogHeader from "./BlogHeader";
import Preloader from "../Navigation/Preloader";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import { Category } from "@/types";
import Lenis from "lenis";
import { TypedObject } from "sanity";

// Complete post interface
export interface BlogPost {
  _id: string;
  categories: Category[];
  image: {
    alt: string;
  };
  publishedAt: string;
  slug: {
    current: string;
  };
  titleen: string;
  titlefr: string;
  excerpten: string;
  excerptfr: string;
  bodyen: TypedObject | TypedObject[];
  bodyfr: TypedObject | TypedObject[];
}

type BlogShort = {
  _id: string;
  categories: Category[];
  image: {
    alt: string;
  };
  publishedAt: string;
  slug: {
    current: string;
  };
  titleen: string;
  titlefr: string;
};

const BlogDetailsWrapper = ({
  blogpost,
  otherblogs,
}: {
  blogpost: BlogPost;
  otherblogs: BlogShort[];
}) => {
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
  const currentLocale = i18n.language;
  const blogName = currentLocale === "en" ? blogpost.titleen : blogpost.titlefr;

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

  // 

  return (
    <>
      <Preloader
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
        pagename={blogName}
      />

      <Navbar
        setLocalState={setLocalState}
        animationFinished={animationFinished}
      />
      <BlogHeader animationFinished={animationFinished} blogpost={blogpost} />
      <BlogCopy
        content={currentLocale === "en" ? blogpost.bodyen : blogpost.bodyfr}
      />
      <OtherBlogs otherblogs={otherblogs} />
      <ContactFooter text={t("HomePage:homeready")} />
      <Footer />
    </>
  );
};

export default BlogDetailsWrapper;
