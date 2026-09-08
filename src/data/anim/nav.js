import { ease, duration, stagger } from './tokens';

export const menuSlideLeft = {
  initial: { x: 'calc(100% + 100px)', transition: { duration: duration.lg, ease: ease.nav } },
  enter:   { x: '0',                  transition: { duration: duration.xl, ease: ease.nav } },
  exit:    { x: 'calc(100% + 100px)', transition: { duration: duration.xl, ease: ease.nav } },
};

export const navSlide = {
  initial: { x: 80, opacity: 0 },
  enter: i => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: ease.nav, delay: stagger.tight * i },
  }),
  exit: i => ({
    x: 80,
    opacity: 0,
    transition: { duration: 0.8, ease: ease.nav, delay: stagger.tight * (4 - i) },
  }),
};

export const navDotScalling = {
  open:   { scale: 1, transition: { duration: duration.xs } },
  closed: { scale: 0, transition: { duration: duration.sm } },
};
