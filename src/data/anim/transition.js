import { easeInOut } from "motion";

const transitionEase = [0.76, 0, 0.24, 1];

export const transitionExitSlideDown = {
  initial: { top: "-100vh" },
  animate: {
    top: 0,
    transition: { duration: 0.8, ease: transitionEase },
  },
};

export const transitionExitCurve = (initialPath, targetPath) => ({
  initial: {
    d: initialPath,
    transition: { duration: 0.8, ease: transitionEase },
  },
  animate: {
    d: targetPath,
    transition: { duration: 0.8, ease: transitionEase },
  },
});

export const transitionExitText = {
  initial: { opacity: 1, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: transitionEase, delay: 0.5 },
  },
};

export const transitionEnterSlideDown = {
  initial: { top: 0 },
  animate: {
    top: "100vh",
    transition: { duration: 0.8, ease: transitionEase, delay: 0.5 },
  },
};

export const transitionEnterCurve = (initialPath, targetPath) => ({
  initial: {
    d: initialPath,
    transition: { duration: 0.8, ease: transitionEase },
  },
  animate: {
    d: targetPath,
    transition: { duration: 0.8, ease: transitionEase, delay: 0.5 },
  },
});

export const transitionEnterText = {
  initial: { opacity: 1, y: 0 },
  animate: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.4, delay: 0.35, ease: easeInOut },
  },
};
