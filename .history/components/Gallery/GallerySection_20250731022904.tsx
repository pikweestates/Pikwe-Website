import React from "react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import { Icon } from "@iconify/react";
import IMAGE from "../../public/images/plot.jpg";
import styles from "../../styles/ReUsables/gallerysection.module.scss";

const GallerySection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const galleryContent = [
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
    {
      image: IMAGE,
      text: "Newly developed residential plot features clearly marked sections, paved access roads, and central water infrastructure, set against serene rural landscapes.",
    },
    {
      image: IMAGE,
      text: "Newly developed residential plot features clearly marked sections, paved access roads, and central water infrastructure, set against serene rural landscapes.",
    }
  ];
  return (
    <div className={`section ${styles.gs__section}`} ref={ref}>
      <div className={`container ${styles.gs__container}`}>
        <div className={styles.gs__content}>
          {
            galleryContent.map(() => (
              
            ))
          }
          <div className={styles.gallery__box}>
            <div className={styles.gb__main}>
              <ImagePlaceholder src={IMAGE} alt="PIKWE ESTATES" />
            </div>
            <div className={styles.gb__overlay}>
              <div className={styles.gb__top}>
                <p>
                  Newly developed residential plot features clearly marked
                  sections, paved access roads, and central water
                  infrastructure, set against serene rural landscapes.
                </p>
              </div>
              <div className={styles.gb__bottom}>
                <div className={styles.thumbnail}>
                  <ImagePlaceholder src={IMAGE} alt="PIKWE ESTATES" />
                </div>
                <div className={styles.gb__button}>
                  <Icon icon="carbon:arrow-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
