'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/context';

gsap.registerPlugin(SplitText, ScrollTrigger);

const TextReveal = ({
  children,
  lines,
  lineClassName,
  as: Component = 'div',
  className = '',
  style,
  staggerDelay = 0.075,
  startDelay = 0,
  ready = true,
  isHero = false,
  replayOnNavigate = false,
}) => {
  const { canRevealContent, revealEpoch } = useLoading();

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
        ease: 'power3.out',
        stagger: staggerDelay,
        delay: startDelay,
      }
    );
  };

  useEffect(() => {
    if (!ref.current) return;

    // hide until onSplit fires
    gsap.set(ref.current, { visibility: 'hidden' });

    splitRef.current = SplitText.create(ref.current, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: self => {
        gsap.set(self.lines, { yPercent: 100 });
        gsap.set(ref.current, { visibility: 'visible' });

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
    if (!isHero || replayOnNavigate || !ready || !canRevealContent) return;
    if (splitRef.current) {
      playAnimation();
    } else {
      pendingPlayRef.current = true;
    }
  }, [canRevealContent, isHero, ready, replayOnNavigate]);

  useEffect(() => {
    if (!isHero || !replayOnNavigate || !ready || !canRevealContent) return;

    hasPlayedRef.current = false;
    if (splitRef.current?.lines) {
      gsap.set(splitRef.current.lines, { yPercent: 100 });
    }

    if (splitRef.current) {
      playAnimation();
    } else {
      pendingPlayRef.current = true;
    }
  }, [canRevealContent, isHero, ready, replayOnNavigate, revealEpoch]);

  useEffect(() => {
    if (isHero || !ref.current || !canRevealContent || !ready) return;

    stRef.current = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
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
  }, [canRevealContent, ready, isHero, revealEpoch]);

  const content = lines
    ? lines.map((line, i) => (
        <span key={i} style={{ display: 'block' }} className={lineClassName}>
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
