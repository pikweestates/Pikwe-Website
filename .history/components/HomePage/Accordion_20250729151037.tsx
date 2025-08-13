import React from "react";
import styles from "../../styles/HomePage/accordion.module.scss";

const Accordion = () => {
  return (
    <div
      className={`${styles.accordion}`}
      key={i}
      onClick={() => setActiveAccordion(i)}
    >
      <div className={styles.acc__head}>
        <div
          className={`${styles.acc__iconwrap} ${
            activeAccordion === i ? styles.active__svg : ""
          }`}
        >
          <Icon icon="ix:plus" />
        </div>
        <div className={styles.ah__right}>
          <h2
            className={`${styles.acc__h2} ${
              activeAccordion === i ? styles.active__h2 : ""
            }`}
          >
            {data.name}
          </h2>
        </div>
      </div>
      <div
        className={`${styles.acc__body} ${
          activeAccordion === i ? styles.active__acc : ""
        }`}
      >
        <div className={styles.acb__content}>
          <p className={styles.acb__p}>{data.text}</p>
          <div className={styles.acb__image}>
            <ImagePlaceholder src={data.image} alt={data.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
