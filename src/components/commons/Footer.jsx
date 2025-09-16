import React from 'react';
import { HoverRotate } from '..';
import { contact_info, social_links, pages_data } from '../../data/data';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scrollTo = useScrollTo();

  // Find current page data based on pathname
  const getCurrentPage = () => {
    if (currentPath === '/') return pages_data.home;
    return Object.values(pages_data).find(page => page.href === currentPath) || pages_data.home;
  };

  const currentPage = getCurrentPage();

  // Handle section click
  const handleSectionClick = (e, id) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <section className="section-padding-end">
      <div className="w-full m-auto">
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
      </div>
    </section>
  );
};

export default Footer;
