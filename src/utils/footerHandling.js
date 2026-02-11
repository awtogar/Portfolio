import { useLocation } from 'react-router-dom';
import { pages_data } from '../data/data';
import { ScrollToSections } from '../function/ScrollToSections';

export const useFooter = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scrollToSection = ScrollToSections();

  const getCurrentPage = () => {
    if (currentPath === '/') return pages_data.home;
    return Object.values(pages_data).find(page => page.href === currentPath) || pages_data.home;
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
