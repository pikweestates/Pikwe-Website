"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
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
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/fr";

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
  }, []); // Only create timeline once

  // Handle timeline resume logic
  useEffect(() => {
    const shouldResume = currentValue === 100 || animFinished;
    
    if (shouldResume && timelineRef.current && !hasResumed.current) {
      hasResumed.current = true;
      setTimeout(() => {
        timelineRef.current?.resume();
      }, 1000);
    }
  }, [currentValue, animFinished]);

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

      {localState === "Initial State" && (
        <div className={styles.preloader__one}>
          <div
            className={styles.progress}
            style={{ width: `${currentValue}%` }}
          ></div>
          <div className={styles.preloader__wrapper}>
            <div className={styles.pre__bottom}>
              <div className={styles.pre__content}>
                <div className={styles.slogan}>
                  <p>{t("HomePage:slogan")}</p>
                </div>
                <div className={styles.loader}>
                  <span className={styles.spinner}></span>
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
    </div>
  );
};

export default Preloader;
