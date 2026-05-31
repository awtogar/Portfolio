export const PAGE_TRANSITION = {
  cover: {
    duration: 1.05,
    ease: [0.22, 1, 0.36, 1],
  },

  reveal: {
    duration: 1.1,
    ease: [0.22, 1, 0.37, 0.65],
  },

  titleIn: {
    duration: 0.34,
    ease: [0.22, 1, 0.36, 1],
    delay: 0.18,
  },

  titleOut: {
    duration: 0.34,
    ease: [0.4, 0, 0.2, 1],
    delay: 0.06,
  },
};

export const CURTAIN_LAYERS = [
  {
    className: 'bg-secondary',
    zIndex: 1,
    coverDelay: 0,
    revealDelay: 0,
  },

  {
    className: 'bg-primary',
    zIndex: 2,
    coverDelay: 0.24,
    revealDelay: 0.14,
  },
];
