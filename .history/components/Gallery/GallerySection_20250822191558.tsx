"use client";

import React, { useState } from "react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import { Icon } from "@iconify/react";
import IMAGE from "../../public/images/plot.jpg";
import { ImageModalAnim } from "@/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import IMAGE2 from "../../public/images/homeimage.jpg";
import styles from "../../styles/ReUsables/gallerysection.module.scss";

interface Gallery {
  image: {
    alt: string;
  };
  descriptionen: string;
  descriptionfr: string;
  _id: string;
}

const GallerySection = ({
  ref,
  gallery,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  gallery: Gallery[];
}) => {
  const {i18n} = useTranslation();
  const currentlocale = i18n.language;

  const galleryContent = [
    {
      image: IMAGE,
      text: "Newly developed residential plot features clearly marked sections, paved access roads, and central water infrastructure, set against serene rural landscapes.",
    },
    {
      image: IMAGE2,
      text: "Newly developed residential plot features clearly marked sections, paved access roads, and central water infrastructure, set against serene rural landscapes.",
    },
    {
      image: IMAGE,
      text: "Newly developed residential plot features clearly marked sections, paved access roads, and central water infrastructure, set against serene rural landscapes.",
    },
    {
      image: IMAGE,
      text: "Newly developed residential plot features clearly marked sections, paved access roads, and central water infrastructure, set against serene rural landscapes.",
    },
    {
      image: IMAGE,
      text: "Newly developed residential plot features clearly marked sections, paved access roads, and central water infrastructure, set against serene rural landscapes.",
    },
    {
      image: IMAGE,
      text: "Newly developed residential plot features clearly marked sections, paved access roads, and central water infrastructure, set against serene rural landscapes.",
    },
  ];

  const galleryContents = gallery.map((content) => ({
    image: content.image,
    text: currentlocale,
  }));

  //Managing modal
  const [activeImage, setActiveImage] = useState(0);
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <div className={`section ${styles.gs__section}`} ref={ref}>
        <div className={`container ${styles.gs__container}`}>
          <div className={styles.gs__content}>
            {galleryContent.map((data, i) => (
              <div
                className={styles.gallery__box}
                key={i}
                onClick={() => {
                  setActiveImage(i);
                  setActiveModal(true);
                }}
              >
                <div className={styles.gbm__top}>
                  <div className={styles.gb__main}>
                    <ImagePlaceholder src={data.image} alt="PIKWE ESTATES" />
                  </div>
                  <div className={styles.gb__overlay}>
                    <div className={styles.gb__top}>
                      <p>{data.text}</p>
                    </div>
                    <div className={styles.gb__bottom}>
                      <div className={styles.thumbnail}>
                        <ImagePlaceholder
                          src={data.image}
                          alt="PIKWE ESTATES"
                        />
                      </div>
                      <div className={styles.gb__button}>
                        <Icon icon="carbon:arrow-up" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.gbm__bottom}>
                  <div className={styles.gb__top}>
                    <p>{data.text}</p>
                  </div>
                  <div className={styles.gb__button}>
                    <Icon icon="carbon:arrow-up" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {activeModal && (
          <motion.div
            variants={ImageModalAnim}
            animate={activeModal ? "enter" : "exit"}
            exit="exit"
            className={styles.image__modal}
          >
            <div className={styles.main__image}>
              <ImagePlaceholder
                src={galleryContent[activeImage].image}
                alt="PIKWE ESTATES"
              />
              <div
                className={styles.cancel}
                onClick={() => setActiveModal(false)}
              >
                <Icon icon="ix:cancel" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
