import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../../styles/ReUsables/linkbutton.module.scss";

const LinkButton = ({data}: {data: }) => {
  return (
    <div className={styles.link__wrapper}>
      <Link className={styles.linker} href="/">
        <div className={styles.link__icon}>
          <Icon icon="carbon:arrow-up" />
        </div>
        <div className={styles.button__text}>
          <span>Speak to a consultant</span>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
