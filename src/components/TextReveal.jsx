"use client";

import { useRef, useEffect } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";
import { usePreloader } from "@/context";

const TextReveal = ({
  children,
  lines,
  lineClassName,
  as: Component = "div",
  className = "",
  style,
  staggerDelay = 0.075,
  startDelay = 0,
  ready = true,
}) => {
  const { isReady } = usePreloader();

  const ref = useRef(null);
  const splitRef = useRef(null);
  const stRef = useRef(null);
  const hasPlayedRef = useRef(false);
  const pendingPlayRef = useRef(false);

  const playAnimation = () => {
    if (hasPlayedRef.current || !splitRef.current) return;
    hasPlayedRef.current = true;
    pendingPlayRef.current = false;

    gsap.fromTo(
      splitRef.current.lines,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
        stagger: staggerDelay,
        delay: startDelay,
      }
    );
  };

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, { visibility: "hidden" });

    splitRef.current = SplitText.create(ref.current, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      aria: false,
      onSplit: (self) => {
        gsap.set(self.lines, { yPercent: 100 });
        gsap.set(ref.current, { visibility: "visible" });

        if (pendingPlayRef.current) {
          playAnimation();
        } else if (hasPlayedRef.current) {
          gsap.set(self.lines, { yPercent: 0 });
        }
      },
    });

    return () => {
      stRef.current?.kill();
      splitRef.current?.revert();
    };
  }, []);

  useEffect(() => {
    if (!ref.current || !isReady || !ready) return;

    stRef.current = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (splitRef.current) {
          playAnimation();
        } else {
          pendingPlayRef.current = true;
        }
      },
    });

    return () => stRef.current?.kill();
  }, [isReady, ready]);

  const content = lines
    ? lines.map((line, i) => (
        <span key={i} style={{ display: "block" }} className={lineClassName}>
          {line}
        </span>
      ))
    : children;

  return (
    <Component ref={ref} className={className} style={style}>
      {content}
    </Component>
  );
};

export default TextReveal;
