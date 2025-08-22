import React from "react";
import { PortableText } from "next-sanity";
import LinkButton from "../ReUsables/LinkButton";
import { urlFor } from "@/sanity/lib/image";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/blogcopy.module.scss";
import { TypedObject } from "sanity";

const BlogCopy = ({ content }: { content: TypedObject | TypedObject[] }) => {
  
  
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
