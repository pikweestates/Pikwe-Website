import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "../../styles/ReUsables/linkbutton.module.scss";

interface LinkInterface{
  href: string;
  text: string;
}

interface DownloadInterface{

  text: string;
}

const LinkButton = ({linkData, }: {linkData: LinkInterface}) => {
  if (linkData) {

    return (
      <div className={styles.link__wrapper}>
        <Link className={styles.linker} href={linkData.href}>
          <div className={styles.link__icon}>
            <Icon icon="carbon:arrow-up" />
          </div>
          <div className={styles.button__text}>
            <span>{linkData.text}</span>
          </div>
        </Link>
      </div>
    );
  } else if ()
};

export default LinkButton;
