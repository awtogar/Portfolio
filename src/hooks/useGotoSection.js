import { useLenis } from '../context/lenisContext';

export const useGotoSection = () => {
  const { lenis } = useLenis();
  
  return (id) => {
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