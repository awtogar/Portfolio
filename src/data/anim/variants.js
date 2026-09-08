import { ease, duration } from './tokens';

export const variants = {
  fadeUp: (d = 0) => ({
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: duration.md, delay: d, ease: ease.out } },
  }),

  fadeIn: (d = 0) => ({
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: duration.sm, delay: d, ease: ease.out } },
  }),

  scaleUp: (d = 0) => ({
    hidden:  { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: duration.md, delay: d, ease: ease.spring } },
  }),

  slideLeft: (d = 0) => ({
    hidden:  { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: duration.md, delay: d, ease: ease.out } },
  }),

  slideRight: (d = 0) => ({
    hidden:  { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: duration.md, delay: d, ease: ease.out } },
  }),

  clipUp: (d = 0) => ({
    hidden:  { clipPath: 'inset(100% 0 0 0)' },
    visible: { clipPath: 'inset(0% 0 0 0)', transition: { duration: duration.md, delay: d, ease: ease.spring } },
  }),
};
