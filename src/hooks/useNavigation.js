'use client';

import { useLenis, useLoading } from '@/context';

export const useNavigation = () => {
  const { lenis } = useLenis();
  const { navigateTo, scrollToSection } = useLoading();

  const handleNavClick = (e, page) => {
    e.preventDefault();

    if (page.sectionId) {
      scrollToSection(page.sectionId, lenis);
    } else if (page.href === '/') {
      lenis?.scrollTo(0, { duration: 1.2 });
    } else {
      navigateTo(page.href);
    }
  };

  return {
    handleNavClick,
  };
};
