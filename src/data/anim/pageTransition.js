export const PAGE_TRANSITION = {
  cover: { duration: 0.85, ease: [0.65, 0, 0.35, 1] },
  reveal: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
};

export const CURTAIN_LAYERS = [
  { className: 'bg-neutral-100', zIndex: 1, coverDelay: 0, revealDelay: 0.25 },
  { className: 'bg-neutral-200', zIndex: 2, coverDelay: 0.05, revealDelay: 0.2 },
  { className: 'bg-neutral-300', zIndex: 3, coverDelay: 0.1, revealDelay: 0.15 },
  { className: 'bg-neutral-400', zIndex: 4, coverDelay: 0.15, revealDelay: 0.1 },
  { className: 'bg-neutral-500', zIndex: 5, coverDelay: 0.2, revealDelay: 0.05 },
  { className: 'bg-primary', zIndex: 6, coverDelay: 0.25, revealDelay: 0 },
];

const lastLayer = CURTAIN_LAYERS[CURTAIN_LAYERS.length - 1];

export const TITLE_TRANSITION = {
  in: {
    duration: PAGE_TRANSITION.cover.duration,
    ease: PAGE_TRANSITION.cover.ease,
    delay: lastLayer.coverDelay, // exact same start point as primary curtain
  },
  out: {
    duration: PAGE_TRANSITION.reveal.duration,
    ease: PAGE_TRANSITION.reveal.ease,
    delay: lastLayer.revealDelay, // exact same start point as primary curtain
  },
};
