import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useFadeIn = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const duration = options.duration !== undefined ? options.duration : 1;
      const ease = options.ease || 'power3.out';

      let finalConfig = {
        opacity: 1,
        duration,
        ease,
        ...options.config,
      };

      if (finalConfig.scrollTrigger && finalConfig.scrollTrigger.trigger) {
        if ('current' in finalConfig.scrollTrigger.trigger) {
          finalConfig.scrollTrigger.trigger = finalConfig.scrollTrigger.trigger.current;
        }
      }

      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        finalConfig
      );
    });

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
