import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/ReUsables/videoplaceholder.module.scss";

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
