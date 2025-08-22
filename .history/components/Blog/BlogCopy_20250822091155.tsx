import React from 'react'
import { PortableText } from "next-sanity";
import LinkButton from "../ReUsables/LinkButton";
import { urlFor } from "@/sanity/lib/image";
import ImagePlaceholder from '../ReUsables/ImagePlaceholder';
import styles from "../../styles/ReUsables/blogcopy.module.scss"

const BlogCopy = () => {
  return (
    <div className={`section ${styles.bc__section}`}>
      <div className={styles.bc__container}>

      </div>
    </div>
  )
}

export default BlogCopy

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      
      <div className={styles.portableImage} style={{aspectRatio: value.aspectRatio}}>
        <ImagePlaceholder src={urlFor(value).url()} alt={value.alt} />
      </div>
    ),
  },
  marks: {
    button: ({value}: any) => {
      const mainButtonData = {
        name: `${value.label}`,
        link: `${value.url}`,
        background: "var(--pink)",
        text: "#ffffff",
        round: "#ffffff",
        border: "1px solid transparent",
        arrow: "var(--pink)",
        hovBack: "#ffffff",
        hovText: "var(--pink)",
        hovBorder: "1px solid var(--pink)",
        hovArrow: "white",
        hovRound: "var(--pink)",
      };

      return(
        <MainButton target="_blank" buttonprops={mainButtonData}/>
      )
    }
  }
};
