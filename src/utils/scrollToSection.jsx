import { useLenis } from '../hooks/useLenis'; // Use this import path

// For use inside components
export const useScrollToSection = () => {
  const { lenis } = useLenis();

  return id => {
    const element = document.getElementById(id);
    if (element && lenis) {
      lenis.scrollTo(element, {
        offset: 0,
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };
};

// For use outside hooks/components
export const scrollToSection = (lenis, id) => {
  const element = document.getElementById(id);
  if (element && lenis) {
    lenis.scrollTo(element, {
      offset: 0,
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }
};
