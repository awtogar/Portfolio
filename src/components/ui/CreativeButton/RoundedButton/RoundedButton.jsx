import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function RoundedButton({
  children,
  backgroundColor = "var(--color-accent-primary)",
  textColor = "#var(--color-main)",
  className = "",
  ...attributes
}) {
  const bgRef = useRef(null);
  const hoverTl = useRef(null);

  useEffect(() => {
    hoverTl.current = gsap.timeline({ paused: true });
    hoverTl.current.to(bgRef.current, {
      y: "0%",
      borderRadius: "0%",
      duration: 0.5,
      ease: "expo.out",
    }
  );
  
    return () => {
      hoverTl.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    hoverTl.current.play();
  };

  const handleMouseLeave = () => {
    hoverTl.current.reverse();
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden cursor-pointer group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...attributes}
    >
      {/* Background hover */}
      <span
        ref={bgRef}
        style={{
          backgroundColor,
          transform: "translateY(100%)",
        }}
        className="absolute inset-0 transition-transform duration-500 ease-expo rounded-full"
      />

      {/* Text */}
      <span className="relative z-10" style={{ color: textColor }}>
        {children}
      </span>
    </div>
  );
}
