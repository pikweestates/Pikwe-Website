import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Lenis from "lenis";
import styles from "../../styles/ReUsables/linkbutton.module.scss";

interface LinkInterface {
  href: string;
  text: string;
}

interface DownloadInterface {
  href: string;
  text: string;
}

interface ScrollInterface {
  lenis: Lenis | null;
  reference?: React.RefObject<HTMLDivElement | null>;
}

const LinkButton = ({
  linkData,
  downloadData,
  scrollData,
}: {
  linkData?: LinkInterface;
  downloadData?: DownloadInterface;
  scrollData?: ScrollInterfaceInterface;
}) => {

  const handleLenisScroll = () => {
    if (lenis && reference?.current) {
      const referenceTop =
        window.scrollY + reference?.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop);
    }
  };


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
  } else if (downloadData) {
    return (
      <div className={styles.link__wrapper}>
        <a className={styles.linker} href={downloadData.href} download>
          <div className={styles.link__icon}>
            <Icon icon="carbon:arrow-up" />
          </div>
          <div className={styles.button__text}>
            <span>{downloadData.text}</span>
          </div>
        </a>
      </div>
    );
  } else if (scrollData) {
    return;
  }
};

export default LinkButton;
