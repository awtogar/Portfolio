import { useLocation } from 'react-router-dom';
import { pages } from '../data/data';
import { ScrollToSections } from '../function/ScrollToSections';

export const useFooter = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scrollToSection = ScrollToSections();

  const getCurrentPage = () => {
    if (currentPath === '/') return pages.home;
    return Object.values(pages).find(page => page.href === currentPath) || pages.home;
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
