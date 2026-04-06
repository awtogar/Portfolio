export const menuSlideLeft = {
  initial: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  enter: { x: "0", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }
}

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
}

export const navDotScalling = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } }
};

export const PreloaderSlideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const preloaderCurvePath = (initialPath, targetPath) => ({
  initial: {
    d: initialPath,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    d: targetPath,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
});

// ─── 2-Phase Page Transition Animations ──────────────────────────────
// Same easing as preloader
const transitionEase = [0.76, 0, 0.24, 1];

// EXIT PHASE — slides DOWN from above (inverse of preloader sliding UP)
export const transitionExitSlideDown = {
  initial: { top: "-100vh" },
  animate: {
    top: 0,
    transition: { duration: 1, ease: transitionEase },
  },
};

// EXIT PHASE — curve morphs from bulge to flat (same as preloader initial→exit)
export const transitionExitCurve = (initialPath, targetPath) => ({
  initial: {
    d: initialPath,
    transition: { duration: 0.9, ease: transitionEase },
  },
  animate: {
    d: targetPath,
    transition: { duration: 0.9, ease: transitionEase, delay: 0.3 },
  },
});

// EXIT PHASE — text fades in on overlay
export const transitionExitText = {
  initial: {
    opacity: 1,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: transitionEase,
      delay: 0.5,
    },
  },
};

// ENTER PHASE — slides DOWN off screen (like preloader exit but going down)
export const transitionEnterSlideDown = {
  initial: { top: 0 },
  animate: {
    top: "100vh",
    transition: { duration: 1, ease: transitionEase, delay: 0.5 },
  },
};

// ENTER PHASE — curve morphs from flat to bulge (reverse of exit)
export const transitionEnterCurve = (initialPath, targetPath) => ({
  initial: {
    d: initialPath,
    transition: { duration: 2, ease: transitionEase },
  },
  animate: {
    d: targetPath,
    transition: { duration: 2, ease: transitionEase, delay: 0.3 },
  },
});

// ENTER PHASE — text fades out
export const transitionEnterText = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 2,
      ease: transitionEase,
    },
  },
};