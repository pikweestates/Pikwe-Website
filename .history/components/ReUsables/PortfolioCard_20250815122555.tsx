import React from "react";
import { StaticImageData } from "next/image";
import Copy from "./Copy";
import ImagePlaceholder from "./ImagePlaceholder";
import Link from "next/link";
import styles from "../../styles/ReUsables/portfoliocard.module.scss";

interface PortfolioInterface {
  ref: string;
  name: string;
  location: string;
  area: number;
  price: number;
  image: StaticImageData;
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

  return (
    <Link href={data.link} className={styles.portfolio__container}>
      <div className={styles.pc__top}>
        <div className={styles.pc__image}>
          <ImagePlaceholder src={data.image} alt={data.name} />
        </div>
        <Copy>
          <span className={styles.reference}>{data.ref}</span>
        </Copy>
      </div>
      <div className={styles.pc__bottom}>
        <Copy>

        <p className={styles.land__name}>{data.name}</p>
        </Copy>
        <div className={styles.land__details}>
          <Copy>

          <span>{data.location}</span>
          </Copy>
          <Copy>

          <span>{formatNumber(data.area)}m&sup2;</span>
          </Copy>
        </div>
        <Copy>

        <span className={styles.price}>XAF {formatNumber(data.price)}</span>
        </Copy>
      </div>
    </Link>
  );
};

export default PortfolioCard;
