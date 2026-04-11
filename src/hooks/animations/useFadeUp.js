import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useFadeUp = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const yFrom = options.y !== undefined ? options.y : 50;
      const duration = options.duration !== undefined ? options.duration : 1;
      const ease = options.ease || 'power3.out';

      let finalConfig = {
        y: 0,
        opacity: 1,
        duration,
        ease,
        ...options.config,
      };

      if (finalConfig.scrollTrigger && finalConfig.scrollTrigger.trigger) {
        // If trigger is a React ref, use its current value
        if ('current' in finalConfig.scrollTrigger.trigger) {
          finalConfig.scrollTrigger.trigger = finalConfig.scrollTrigger.trigger.current;
        }
      }

      gsap.fromTo(
        ref.current,
        { y: yFrom, opacity: 0 },
        finalConfig
      );
    });

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
