"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/ReUsables/imageplaceholder.module.scss";

const ImagePlaceholder = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && (
        <AnimatePresence>
          <motion.div
            className={styles.shimmerPlaceholder}
            exit={{ opacity: 0 }}
          ></motion.div>
        </AnimatePresence>
      )}
      <Image
        fill
        quality={100}
        alt={alt}
        src={src}
        onLoad={handleLoadingComplete}
      />
    </>
  );
};

export default ImagePlaceholder;