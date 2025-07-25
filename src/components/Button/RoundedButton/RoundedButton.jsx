import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  className = "",
  ...attributes
}) {
  const circle = useRef(null);
  const timeline = useRef(null);
  const timeoutId = useRef(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { 
          top: "-150%", 
          width: "125%", 
          duration: 0.25 
        },
        "exit"
      )
      .to(
        circle.current,
        { 
          top: "-25%", 
          width: "150%", 
          duration: 0.4, 
          ease: "power3.in" 
        },
        "enter"
      );

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    // Use tweenFromTo like the reference
    timeline.current.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      // Play the full timeline (which will go to exit)
      timeline.current.play();
    }, 300); // Match the reference timeout
  };


  return (
    <div
      className={`flex relative rounded-[3em] border border-gray-400 cursor-pointer items-center justify-center px-[60px] py-[15px] overflow-hidden group ${className}`}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...attributes}
    >
      <span className="relative z-[1] transition-colors duration-400 group-hover:text-white">
        {children}
      </span>
      <div
        ref={circle}
        style={{ backgroundColor }}
        className="w-full h-[150%] absolute rounded-full top-full left-0"
      />
    </div>
  );
}
