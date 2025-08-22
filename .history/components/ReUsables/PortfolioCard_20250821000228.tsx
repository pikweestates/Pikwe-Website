import React from "react";
import { urlFor } from "@/sanity/lib/image";
import ImagePlaceholder from "./ImagePlaceholder";
import Link from "next/link";
import styles from "../../styles/ReUsables/portfoliocard.module.scss";

interface PortfolioInterface {
  id: string;
  ref: string;
  name: string;
  location: string;
  area: number;
  price: number;
  image: {
    alt: string;
  };
  link: string;
}

const PortfolioCard = ({ data }: { data: PortfolioInterface }) => {
  const formatNumber = (num: number) => {
    // Convert to number if it's a string
    const numValue = typeof num === "string" ? parseFloat(num) : num;

    // Return as-is if not a valid number
    if (isNaN(numValue)) return num;

    // Use toLocaleString for comma formatting
    return numValue.toLocaleString();
  };

  const imager = urlFor(data.image).url();
  console.log(imager)

  return (
    <Link href={data.link} className={styles.portfolio__container}>
      <div className={styles.pc__top}>
        <div className={styles.pc__image}>
          <ImagePlaceholder src={urlFor(data.image).wurl()} alt={data.image.alt ? data.image.alt : data.name} />
        </div>

        <span className={styles.reference}>{data.ref}</span>
      </div>
      <div className={styles.pc__bottom}>
        <p className={styles.land__name}>{data.name}</p>

        <div className={styles.land__details}>
          <span>{data.location}</span>

          <span>{formatNumber(data.area)}m&sup2;</span>
        </div>

        <span className={styles.price}>XAF {formatNumber(data.price)}</span>
      </div>
    </Link>
  );
};

export default PortfolioCard;
