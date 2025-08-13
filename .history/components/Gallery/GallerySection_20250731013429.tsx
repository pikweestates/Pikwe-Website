import React from 'react'
import styles from "../../styles/ReUsables/gallerysection.module.scss"

const GallerySection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={`section ${styles.gs}`}>

    </div>
  )
}

export default GallerySection