import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import Copy from "./Copy";
import { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "../../styles/ReUsables/insightcard.module.scss";

interface InsightInterface {
  name: string;
  image: StaticImageData;
  categories: string[];
  date: string;
  link: string;
}

const InsightCard = ({ data }: { data: InsightInterface }) => {
  return (
    <Link href={data.link} className={styles.ic__wrapper}>
      <div className={styles.ic__top}>
        <div className={styles.ic__image}>
          <ImagePlaceholder src={data.image} alt={data.name} />
        </div>
        <div className={styles.categories}>
          {data.categories.map((content, i) => (
            <Copy>

            <span className={styles.category} key={i}>
              {content}
            </span>
            </Copy>
          ))}
        </div>
      </div>
      <div className={styles.ic__bottom}>
        <p className={styles.ic__p}>{data.name}</p>
        <span className={styles.ic__date}>{data.date}</span>
      </div>
    </Link>
  );
};

export default InsightCard;
