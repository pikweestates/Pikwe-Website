"use client";

import { useState, useRef, useEffect } from "react";
import { StaticImageData } from "next/image";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";
import { ScrollTrigger } from "gsap/all";
import styles from "../../styles/HomePage/videoplayer.module.scss";

interface VideoPlayerProps {
  src: string;
  fallbackSrc: StaticImageData;
}

const VideoPlayer = ({ src, fallbackSrc }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { ref: sectionRef, inView: inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Play or pause video based on inView status
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [inView]);

  // Handle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Handle video load event
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate clip-path on scroll
    gsap.to(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Reveal the full video
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=100px bottom",
        end: "bottom bottom",
        scrub: 1, // Smooth transition
      },
    });
  });

  //Cursor animations
  const [cursor, setCursor] = useState(false);
  const cursorText = isPlaying ? "Pause" : "Play";
  const pauseplayRef = useRef(null);

  return (
    <>
      <section className={`section ${styles.video__section}`}>
        <div
          className={`container ${styles.video__container}`}
          ref={sectionRef}
        >
          <div className={styles.videoContainer} ref={containerRef}>
            {!isLoaded && (
              <div className={styles.fallback}>
                <ImagePlaceholder src={fallbackSrc} alt="Video loading..." />
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
            <div
              className={styles.playPauseFill}
              onClick={togglePlay}
              ref={pauseplayRef}
              onMouseEnter={() => {
                setCursor(true);
              }}
              onMouseLeave={() => {
                setCursor(false);
              }}
            ></div>
          </div>
        </div>
      </section>
      <Cursor text={cursorText} boundary={pauseplayRef} activeState={cursor} />
    </>
  );
};

export default VideoPlayer;