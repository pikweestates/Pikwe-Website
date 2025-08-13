import React from 'react'
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import IMAGE from "../../public/images/ceo.jpg"
import styles from "../../styles/AboutPage/aboutquote.module.scss"

const AboutQuote = () => {
  return (
    <div className={`section ${styles.quote__section}`}>
      <div className={`container ${styles.quote__container}`}>
        <div className={styles.quote__wrapper}>
          <div className={styles.qw__left}>
            <div className={styles.qw__image}>
              <ImagePlaceholder src={}/>
            </div>
          </div>
          <div className={styles.qw__right}>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutQuote