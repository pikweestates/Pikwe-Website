import React from "react";
import styles from "../../styles/Navigation/infosection.module.scss";

const InfoSection = () => {
  const dataOne = [
    {
      name: "Phone",
      text: "(+237) 679-703-013",
      link: "tel:+237679703013"
    },
    {
      name: "Email",
      text: "pikweestates@gmail.com",
      link: "mailto:pikweestates@gmail.com"
    },
    {
      name: "Office",
      text: "Yaounde, Simbock",
    }
  ]

  const dataTwo = [
    {
      name: "Whatsapp",
      link: "/"
    },
    {
      name: "Instagram",
      link: "/"
    },
    {
      name: "Facebook",
      link: "/"
    }
  ]

  return (
    <div className={`section ${styles.info__section}`}>
      <div className={`container ${styles.info__container}`}>
        <div className={styles.is__left}>
          <span className={styles.is__small}>Get in touch</span>
          <h2 className={styles.is__h2}>Contact Info</h2>
        </div>
        <div className={styles.is__right}>
          <div className={styles.isr__left}>
            <span className={styles.isr__span}>GENERAL INQUIRIES</span>
            <div className={styles.ir__bottomone}>
              {
                dataOne.map((data, i) => {
                  data.
                })
              }
            </div>
          </div>
          <div className={styles.isr__right}>
            <span className={styles.isr__span}>SOCIAL MEDIA</span>
            <div className={styles.ir__bottomtwo}>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
