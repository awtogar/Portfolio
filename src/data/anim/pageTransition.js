export const PAGE_TRANSITION = {
  cover: {
    duration: 1.05,
    ease: [0.22, 1, 0.36, 1],
  },

  reveal: {
    duration: 1.1,
    ease: [0.22, 1, 0.37, 0.65],
  },

  // titleIn fires after the dark curtain (bg-primary) finishes covering:
  // coverDelay(0.24) + cover.duration(1.05) = 1.29s total cover time.
  // We start the title slightly before the full cover completes — at ~0.9s —
  // so it's already settled by the time the curtain is fully down.
  titleIn: {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
    delay: 0.9,
  },

  // titleOut fires at the start of the reveal phase, exits before bg-primary lifts.
  titleOut: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
    delay: 0,
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
