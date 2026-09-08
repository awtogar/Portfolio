// Motion tokens — single source of truth for all animation values.
// Import from here; never hardcode cubic-bezier arrays or ms values in components.

export const ease = {
  smooth: [0.7,  0,    0.3,  1],   // general transitions
  out:    [0.33, 1,    0.68, 1],   // reveal / enter
  inOut:  [0.65, 0,    0.35, 1],   // page curtain cover/reveal
  spring: [0.16, 1,    0.3,  1],   // snappy enter
  nav:    [0.76, 0,    0.24, 1],   // sidebar / nav slides
};

export const duration = {
  xs: 0.25,
  sm: 0.4,
  md: 0.65,
  lg: 0.85,
  xl: 1.0,
};

export const stagger = {
  tight:  0.05,
  normal: 0.10,
  loose:  0.15,
};
