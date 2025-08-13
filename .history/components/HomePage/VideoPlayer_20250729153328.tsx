"use client";

import { useState, useRef } from "react";
import VideoPlaceholder from "../ReUsables/VideoPlaceholder";
import styles from "../../styles/HomePage/videoplayer.module.scss";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle video load event
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  
  return (
    <>
      <section className={`${styles.video__section}`}>
        <div className={`${styles.video__container}`}>
          <div className={styles.videoContainer} ref={containerRef}>
            {!isLoaded && (
              <div className={styles.fallback}>
                <VideoPlaceholder />
              </div>
            )}

            <video
              ref={videoRef}
              className={`${styles.video} ${isLoaded ? styles.show : ""}`}
              src={src}
              loop
              muted
              onLoadedData={handleLoadedData}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer;
