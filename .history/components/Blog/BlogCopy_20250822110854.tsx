import React from "react";
import { PortableText } from "next-sanity";
import LinkButton from "../ReUsables/LinkButton";
import { urlFor } from "@/sanity/lib/image";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/blogcopy.module.scss";
import { TypedObject } from "sanity";

const BlogCopy = ({ content }: { content: any }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const myPortableTextComponents = {
    types: {
      image: ({
        value,
      }: {
        value: {
          aspectRatio: string;
          alt: string;
        };
      }) => (
        <div
          className={styles.portableImage}
          style={{ aspectRatio: value.aspectRatio }}
        >
          <ImagePlaceholder src={urlFor(value).url()} alt={value.alt} />
        </div>
      ),
    },
    marks: {
      button: ({
        value,
      }: {
        value: { label: string; url: string; labelfr: string };
      }) => {
        const mainButtonData = {
          text: `${currentLocale === "en" ? value.label : value.labelfr}`,
          href: `${value.url}`,
        };

        return <LinkButton target="_blank" linkData={mainButtonData} />;
      },
    },
  };

  return (
    <div className={`section ${styles.bc__section}`}>
      <div className={`container ${styles.bc__container}`}>
        <div className={styles.bc__main}>
          <PortableText value={content} components={myPortableTextComponents} />
        </div>
      </div>
    </div>
  );
};

export default BlogCopy;
