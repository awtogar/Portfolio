import React from 'react';
import { HoverRotate } from '..';
import { contact_info, social_links, pages_data } from '../../data/data';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scrollTo = useScrollTo();

  // Find current page data based on pathname
  const getCurrentPage = () => {
    // Default to home if path is root
    if (currentPath === '/') return pages_data.home;

    // Find matching page
    return Object.values(pages_data).find(page => page.href === currentPath) || pages_data.home;
  };

  const currentPage = getCurrentPage();

  // Handle section click
  const handleSectionClick = (e, id) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <section className="footer-section py-8">
      <div className="flex flex-col gap-s600 justify-between">
        <div className="flex justify-between flex-wrap gap-8">
          {/* Section Navigation */}
          <div className="flex flex-col gap-s100">
            <span className="text-primary-muted inline-block border-b border-primary-muted pb-1 w-fit">{currentPage.title} Sections</span>
            {currentPage.sections.map(section => (
              <HoverRotate key={section.id} href={`#${section.id}`} onClick={e => handleSectionClick(e, section.id)}>
                {section.title}
              </HoverRotate>
            ))}
          </div>

          {/* Page Navigation */}
          <div className="flex flex-col gap-s100">
            <span className="text-primary-muted inline-block border-b border-primary-muted pb-1 w-fit">Pages</span>
            {Object.values(pages_data).map(
              page =>
                // Only show other pages if we're on that page OR the current page is not home
                page.href !== currentPath && (
                  <Link key={page.href} to={page.href}>
                    <HoverRotate>{page.title}</HoverRotate>
                  </Link>
                )
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-s100">
            <span className="text-primary-muted inline-block border-b border-primary-muted pb-1 w-fit">Socials</span>
            {social_links.map(social => (
              <HoverRotate key={social.label} as="a" href={social.href} target="_blank" rel="noopener noreferrer">
                {social.title}
              </HoverRotate>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center text-primary/85 pt-4 border-t border-primary-muted">
          <span className="transition-colors hover:text-primary">{contact_info.copyright}</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
