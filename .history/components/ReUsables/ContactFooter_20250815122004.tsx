import React, {useEffect, useRef, useState} from "react";
import Copy from "./Copy";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/svg/patterngreen.svg"
import IMAGE2 from "../../public/svg/gpattmobile.svg"
import SquareButton from "./SquareButton";
import styles from "../../styles/ReUsables/contactfooter.module.scss";

const ContactFooter = ({ text }: { text: string }) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const linkContent = {
    href: `/${currentlocale}/contact`,
    text: t("Navigation:buttontext"),
  };

   //Parallax
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
     target: container,
 
     offset: ["start end", "end start"],
   });
 
   //Handle Resizing Y value
   const [transform, setTransform] = useState(-150);
   const [background, setBackground] = useState(IMAGE) 
 
   useEffect(() => {
     const handleResize = () => {
       if (typeof window !== "undefined" && window.innerWidth < 540) {
         setTransform(-100);
         setBackground(IMAGE2)
       } else if (typeof window !== "undefined" && window.innerWidth < 750) {
         setTransform(-140);
       } else {
         setTransform(-200);
       }
     };
 
     handleResize();
 
     window.addEventListener("resize", handleResize);
 
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, [setBackground, setTransform]);
 
   const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  return (
    <div className={styles.cf__section}>
      <div className={`container ${styles.cf__container}`}>
        <div className={styles.cf__content}>
          <Copy>
            <h2 className={styles.cf__h2}>{text}</h2>
          </Copy>
          <SquareButton status="green" content={linkContent} />
        </div>
      </div>
      <div className={styles.cf__background}>
        <motion.div className={styles.hback__image} style={{ y }}>
          <Image fill quality={100} alt="PIKWE PATTERN" src={background} />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactFooter;
