import React from 'react'
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import { urlFor } from "@/sanity/lib/image";
import styles from "../../styles/Portfolio/portfoliogallery.module.scss"

interface Property {
  _id: string;
  mainimage: {
    alt: string;
  };
  slug: {
    current: string;
  };
  location: string;
  price: number;
  surfacearea: number;
  reference: {
    current: string
  };
  name: string;
  landstatuss: {
    name: string,
    namefr: string
  },
  detailsen: string,
  detailsfr: string,
  images: {
    alt: string;
  }[],
}

const PortfolioGallery = ({post}: {post: Property}) => {
  const images = post.images.map((data) => (
    {
      name: post.name,
      image: urlFor(data).width(1920).url() || urlFor(data).url()
    }
  ))

  return (
    <div className={styles.portfolio__gallery}>
      <div className={`container ${styles.pg__container}`}>
        <div className={styles.pg__wrapper}>
          {
            images.map((data, i) => (
              <div className={styles.pg__image} key={i}>
                <ImagePlaceholder src={data.image} alt={data.name}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PortfolioGallery