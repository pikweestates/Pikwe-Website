import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { urlFor } from "@/sanity/lib/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import styles from "../../styles/ReUsables/insightcard.module.scss";

interface Category {
  nameen: string;
  namefr: string;
  slug: {
    current: string;
  };
  _id: string;
}

interface InsightInterface {
  name: string;
  image: {
    alt: string;
  };
  categories: Category[];
  date: string;
  link: string;
}

const InsightCard = ({ data }: { data: InsightInterface }) => {
    //Translations
    const { i18n } = useTranslation();
    const currentlocale = i18n.language;

  return (
    <Link href={data.link} className={styles.ic__wrapper}>
      <div className={styles.ic__top}>
        <div className={styles.ic__image}>
          <ImagePlaceholder src={urlFor(data.image).width(1920).url()} alt={data.name} />
        </div>
        <div className={styles.categories}>
          {data.categories.map((content, i) => (
            <span className={styles.category} key={i}>
              {currentlocale==="en" ? content.nameen : c}
            </span>
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
