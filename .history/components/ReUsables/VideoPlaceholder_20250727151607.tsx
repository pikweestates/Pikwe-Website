"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/ReUsables/imageplaceholder.module.scss";

const VideoPlaceholder = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className={styles.shimmerPlaceholder}
          exit={{ opacity: 0 }}
        ></motion.div>
      </AnimatePresence>
    </>
  );
};

export default VideoPlaceholder;
