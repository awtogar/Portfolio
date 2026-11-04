"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useIntersectionObserver } from "@/hooks";
import { useParallax } from "@/hooks/animations";

const CardParallax = ({
  src,
  alt = "Media",
  as = "img",
  poster,
  scrollRange = ["-10%", "10%"],
  offset = ["start end", "end start"],
  containerClassName = "",
  objectPosition = "center",
}) => {
  const containerRef = useRef(null);
  const { ref: videoRef, isIntersecting } = useIntersectionObserver({
    rootMargin: "100px",
    threshold: 0.1,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (as !== "video" || !video) return;

    if (isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isIntersecting, as]);
  const y = useParallax(containerRef, { range: scrollRange, offset });

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-lg ${containerClassName}`}
    >
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y }}
      >
        {as === "video" ? (
          <video
            ref={videoRef}
            src={src}
            alt={alt}
            poster={poster || undefined}
            muted
            playsInline
            loop
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={"100%"}
            height={"100%"}
            decoding="async"
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default CardParallax;
