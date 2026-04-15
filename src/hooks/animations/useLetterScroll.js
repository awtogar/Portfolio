import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useLetterScroll = (containerRef, dependencies, { start = 'top bottom', end = 'bottom top', scrub = 1.5 } = {}) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const letters = containerRef.current.querySelectorAll('.letter');
      if (!letters.length) return;

      gsap.set(letters, { yPercent: 100, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          scrub,
          invalidateOnRefresh: true,
        },
      });

      const delays = [0.02, 0.15, 0.33, 0.08, 0.25, 0.45, 0.12, 0.38, 0.05, 0.28, 0.50, 0.18, 0.42, 0.10, 0.35];

      tl.to(letters, {
        yPercent: 0,
        stagger: function(index, target) {
          const charIdx = parseInt(target.dataset.charIdx, 10) || 0;
          const wordIdx = parseInt(target.dataset.wordIdx, 10) || 0;
          
          const waveDelay = delays[charIdx % delays.length];
          return (wordIdx * 0.15) + waveDelay;
        },
        ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end, scrub, containerRef, ...dependencies]);
};
