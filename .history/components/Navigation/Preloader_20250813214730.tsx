"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import gsap from "gsap";
import IMAGE from "../../public/svg/wordmarkmint.svg";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [animationFinished, setAnimationFinished]

  const currentValueRef = useRef(currentValue);

  const { t } = useTranslation();

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

    // This runs only after the DOM is mounted in React
    const startWhenReady = () => {
      if (document.readyState === "complete") {
        setTimeout(updateCounter, 2000); // 2s delay
      } else {
        window.addEventListener("load", () => {
          setTimeout(updateCounter, 2000); // 2s delay after DOM ready
        });
      }
    };

    startWhenReady();

    // Cleanup listener in case it's added
    return () => {
      window.removeEventListener("load", startWhenReady);
    };
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setAnimationFinished(true)
      });

      tl.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });

      tl.pause();

      if (currentValue === 100) {
        tl.resume();
      }
    });

    return () => context.revert();
  }, [currentValue]);

  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__one}>
        <div
          className={styles.progress}
          style={{ width: `${currentValue}%` }}
        ></div>
        <div className={styles.preloader__wrapper}>
          <div className={styles.pre__bottom}>
            <div className={styles.pre__content}>
              <div className={styles.slogan}>
                <p>Land Ownership made Simple & Safe</p>
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
    </div>
  );
};

export default Preloader;
