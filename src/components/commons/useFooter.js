import { useLocation } from 'react-router-dom';
import { pages } from '@/data/data';
import { useScrollToSection } from '@/hooks';

export const useFooter = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scrollToSection = useScrollToSection();

  const getCurrentPage = () => {
    if (currentPath === '/') return pages.home;
    return Object.values(pages).find(page => 
      currentPath === page.href || currentPath.startsWith(`${page.href}/`)
    ) || pages.home;
  };

  const currentPage = getCurrentPage();
  const isContactPage = currentPath === '/contact';

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handleTellUsClick = () => {
    scrollToSection('contact-form');
  };

  return {
    currentPage,
    isContactPage,
    handleSectionClick,
    handleTellUsClick,
  };
};
