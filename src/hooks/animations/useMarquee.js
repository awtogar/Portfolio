import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLenis } from '@/context/LenisContext';

export const useMarquee = (marqueeRef, { speed = 5, direction = 'left', scrollAware = true } = {}) => {
  const tweenRef = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(direction === 'left');
  const { lenis } = useLenis();

  // Setup GSAP animation
  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      const marqueeInner = marqueeRef.current.querySelector('.marquee_inner');
      const marqueeParts = marqueeRef.current.querySelectorAll('.marquee_part');

      if (!marqueeInner || marqueeParts.length === 0) return;

      // Ensure we clean up any prior clones before re-cloning to prevent duplication
      const existingClones = marqueeInner.querySelectorAll('.marquee_clone');
      existingClones.forEach(clone => clone.remove());

      // Clone marquee parts for loop
      marqueeParts.forEach(part => {
        if (!part.classList.contains('marquee_clone')) {
          const clone = part.cloneNode(true);
          clone.classList.add('marquee_clone');
          marqueeInner.appendChild(clone);
        }
      });

      const initialDirection = direction === 'left' ? 1 : -1;

      // Animate both original parts and clones
      tweenRef.current = gsap
        .to('.marquee_part, .marquee_clone', {
          xPercent: -100 * initialDirection,
          repeat: -1,
          duration: speed,
          ease: 'linear',
        })
        .totalProgress(0.5);

      gsap.set('.marquee_inner', { xPercent: -50 });
    }, marqueeRef);

    return () => {
      ctx.revert();
      
      // Cleanup cloned DOM nodes on unmount
      if (marqueeRef.current) {
        const marqueeInner = marqueeRef.current.querySelector('.marquee_inner');
        if (marqueeInner) {
          const existingClones = marqueeInner.querySelectorAll('.marquee_clone');
          existingClones.forEach(clone => clone.remove());
        }
      }
    };
  }, [speed, direction, marqueeRef]);

  // Listen to Lenis scroll direction
  useEffect(() => {
    if (!lenis || !scrollAware) return;

    const handleScroll = ({ direction: scrollDirection }) => {
      const scrollingDown = scrollDirection > 0;
      setIsScrollingDown(scrollingDown);

      if (tweenRef.current) {
        gsap.to(tweenRef.current, {
          timeScale: scrollingDown ? 1 : -1,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis, scrollAware]);

  return { isScrollingDown };
};
