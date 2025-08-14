"use client";

import React, {useState, useRef, useEffect} from "react";
import useTr
import Image from "next/image";
import IMAGE from "../../public/svg/wordmarkmint.svg";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const currentValueRef = useRef(currentValue);

  const {t} = useTranslation()

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

    if (imageLoaded) {
      updateCounter();
    }
  }, []);

  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__one}>
        <div className={styles.progress}></div>
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
