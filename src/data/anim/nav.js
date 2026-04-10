export const menuSlideLeft = {
  initial: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  enter: { x: "0", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }
};

export const navSlide = {
  initial: { x: 80, opacity: 0 },
  enter: i => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i
    }
  }),
  exit: i => ({
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * (4 - i)
    }
  })
};

export const navDotScalling = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
