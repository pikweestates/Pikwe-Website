"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Copy from "../ReUsables/Copy";
import Image from "next/image";
import AnimatedPhrase from "../ReUsables/AnimatedPhrase";
import gsap from "gsap";
import IMAGE from "../../public/svg/wordmarkmint.svg";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = ({
  setAnimationFinished,
  localState,
}: {
  setAnimationFinished: React.Dispatch<React.SetStateAction<boolean>>;
  localState: string;
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const currentValueRef = useRef(currentValue);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const hasResumed = useRef(false); // Prevent multiple resumes

  const [animFinished, setAnimFinished] = useState(false);

  const { t } = useTranslation();
  const pathname = usePathname();

  // Check if current page is homepage
  const isHomePage =
    pathname === "/" || pathname === "/en" || pathname === "/fr";

  useEffect(() => {
    currentValueRef.current = currentValue;
  }, [currentValue]);

  useEffect(() => {
    const updateCounter = () => {
      if (currentValueRef.current < 100) {
        const increment = Math.floor(Math.random() * 10) + 1;
        const newValue = Math.min(currentValueRef.current + increment, 100);
        setCurrentValue(newValue);

        const delay = Math.floor(Math.random() * 50) + 70;
        setTimeout(updateCounter, delay);
      }
    };

    const startWhenReady = () => {
      if (document.readyState === "complete") {
        setTimeout(updateCounter, 2000);
      } else {
        window.addEventListener("load", () => {
          setTimeout(updateCounter, 2000);
        });
      }
    };

    startWhenReady();

    return () => {
      window.removeEventListener("load", startWhenReady);
    };
  }, []);

  // Create the timeline once
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setAnimationFinished(true),
      });

      tl.to(preloaderRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });

      tl.to(preloaderRef.current, { display: "none" }, ">");

      tl.pause();
      timelineRef.current = tl;
    });

    return () => {
      context.revert();
      timelineRef.current = null;
    };
  }, [setAnimationFinished]); // Only create timeline once

  // Handle timeline resume logic
  useEffect(() => {
    let shouldResume = false;

    if (isHomePage) {
      // Home: only close after counter finishes
      shouldResume = currentValue === 100;
    } else {
      // Other pages: only close after phrase finishes
      shouldResume = animFinished;
    }

    if (shouldResume && timelineRef.current && !hasResumed.current) {
      hasResumed.current = true;
      setTimeout(() => {
        timelineRef.current?.resume();
      }, 1000);
    }
  }, [currentValue, animFinished, isHomePage]);

  //Get Page Name
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    const determinePageName = () => {
      if (pathname === "/en" || pathname === "/fr") {
        setPageName(t("Navigation:homelink"));
      } else if (["/en/portfolio", "/fr/portfolio"].includes(pathname)) {
        setPageName("Portfolio");
      } else if (["/en/about", "/fr/a-propos"].includes(pathname)) {
        setPageName(t("Navigation:aboutlink"));
      } else if (["/en/blog", "/fr/blog"].includes(pathname)) {
        setPageName("Blog");
      } else if (["/en/privacy", "/fr/confidentialite"].includes(pathname)) {
        setPageName(t("Navigation:privacy"));
      } else if (["/en/services", "/fr/services"].includes(pathname)) {
        setPageName("Services");
      } else if (["/en/contact", "/fr/contact"].includes(pathname)) {
        setPageName("Contact");
      } else if (["/en/gallery", "/fr/galerie"].includes(pathname)) {
        setPageName(t("Navigation:gallerylink"));
      } else if (
        (pathname.includes("/fr/portfolio/") && pathname !== "/fr/portfolio") ||
        (pathname.includes("/en/portfolio/") && pathname !== "/en/portfolio")
      ) {
        // // Validate if the project exists
        // const projectData = ProjectsContent.find(
        //   (project) => project.slug === slugg
        // );
        // if (projectData) {
        //   setPageName(projectData.name);
        // } else {
        //   setPageName(error);
        // }
        setPageName("Bonaberi Investment Lot");
      } else if (
        (pathname.includes("/fr/blog/") && pathname !== "/fr/blog") ||
        (pathname.includes("/en/blog/") && pathname !== "/en/blog")
      ) {
        setPageName("Cameroon land market trends");
      } else {
        setPageName(t("HomePage:error"));
      }
    };

    determinePageName();
  }, [pathname, t]);

  return (
    <div className={styles.preloader} ref={preloaderRef}>
      {localState === "Translating State" && (
        <div className={styles.translate}>
          <AnimatedPhrase
            phrase={t("Navigation:translating")}
            setAnimFinished={setAnimFinished}
          />
        </div>
      )}

      {localState === "Initial State" && isHomePage && (
        <div className={styles.preloader__one}>
          <div
            className={styles.progress}
            style={{ width: `${currentValue}%` }}
          ></div>
          <div className={styles.preloader__wrapper}>
            <div className={styles.pre__bottom}>
              <div className={styles.pre__content}>
                <div className={styles.slogan}>
                  <Copy animateOnScroll={false}>
                    <p>{t("HomePage:slogan")}</p>
                  </Copy>
                </div>
                <div className={styles.loader}>
                  {/* <span className={styles.spinner}></span> */}
                  <Copy animateOnScroll={false}>
                    <span className={styles.currentValue}><span>
                    {currentValue}
                      </span>%</span>
                  </Copy>
                </div>
              </div>
              <div className={styles.pre__image}>
                <Image
                  fill
                  quality={100}
                  alt="Pikwe Estates"
                  priority
                  src={IMAGE}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {localState === "Initial State" && !isHomePage && (
        <div className={styles.preloader__two}>
          <div className={styles.translate}>
            <AnimatedPhrase
              phrase={pageName}
              setAnimFinished={setAnimFinished}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
