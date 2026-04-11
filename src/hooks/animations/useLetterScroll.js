import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useLetterScroll = (containerRef, dependencies, { start = 'top 0%', end = 'bottom 120%', scrub = 2 } = {}) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const tracks = containerRef.current.querySelectorAll('.ls-track');
      if (!tracks.length) return;

      // Ensure start is neat
      gsap.set(tracks, { y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          scrub,
        },
      });

      // phase 1: neat -> messy
      tl.to(tracks, {
        y: (i, el) => {
          const count = parseInt(el.dataset.clones, 10);
          return `-${count}em`;
        },
        stagger: {
          each: 0.02,
          from: 'random',
        },
        ease: 'power1.inOut',
      });

      // phase 2: messy -> neat
      tl.to(tracks, {
        y: 0,
        stagger: {
          each: 0.0,
          from: 'random',
        },
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end, scrub, containerRef, ...dependencies]);
};
