"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import styles from "../../styles/ReUsables/imageplaceholder.module.scss";

const VideoPlaceholder = ({
    isLoading
}: {
  isLoading
}) => {
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
    </>
  );
};

export default VideoPlaceholder;