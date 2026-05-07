export const revealPresets = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
  },
  clipUp: {
    initial: { clipPath: 'inset(100% 0 0 0)' },
    animate: { clipPath: 'inset(0% 0 0 0)' },
  },
};

export const defaultEase = [0.33, 1, 0.68, 1];
