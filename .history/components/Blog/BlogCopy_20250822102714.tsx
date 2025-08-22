import React from "react";
import { PortableText } from "next-sanity";
import LinkButton from "../ReUsables/LinkButton";
import { urlFor } from "@/sanity/lib/image";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import useTr
import styles from "../../styles/ReUsables/blogcopy.module.scss";
import { TypedObject } from "sanity";

const BlogCopy = ({ content }: { content: TypedObject | TypedObject[] }) => {
  console.log(content);
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

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div
        className={styles.portableImage}
        style={{ aspectRatio: value.aspectRatio }}
      >
        <ImagePlaceholder src={urlFor(value).url()} alt={value.alt} />
      </div>
    ),
  },
  marks: {
    button: ({ value }: any) => {
      const mainButtonData = {
        text: `${value.label}`,
        href: `${value.url}`,
      };

      return <LinkButton target="_blank" linkData={mainButtonData} />;
    },
  },
};
