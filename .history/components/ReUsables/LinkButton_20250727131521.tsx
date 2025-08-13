import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../../styles/ReUsables/linkbutton.module.scss";

interface LinkInterface{
  href: string;
  text: string;
}

const LinkButton = ({Data}: {Data: LinkInterface}) => {
  return (
    <div className={styles.link__wrapper}>
      <Link className={styles.linker} href={Data.href}>
        <div className={styles.link__icon}>
          <Icon icon="carbon:arrow-up" />
        </div>
        <div className={styles.button__text}>
          <span>{Data.text}</span>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
