import React from 'react';
import { HoverRotate } from '..';
import { contact_info, social_links, pages_data } from '../../data/data';
import { useFooterScroll } from '../../hooks/useFooterScroll';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const footerScroll = useFooterScroll();

  // Find current page data based on pathname
  const getCurrentPage = () => {
    if (currentPath === '/') return pages_data.home;
    return Object.values(pages_data).find(page => page.href === currentPath) || pages_data.home;
  };

  const currentPage = getCurrentPage();
  const handleSectionClick = (e, id) => {
    e.preventDefault();
    footerScroll(id);
  };

  return (
    <section className="section-padding-end">
      <div className="w-full m-auto">
        <div className="flex flex-col gap-s600 justify-between">
          <div className="flex justify-between flex-wrap gap-8">
            {/* Section Navigation */}
            <div className="flex flex-col gap-s100">
              <span className="text-primary-muted/72 inline-block border-b border-primary-muted/35 pb-1 w-fit">Content Menu</span>
              {currentPage.sections.map(section => (
                <HoverRotate className="text-primary-muted" key={section.id} href={`#${section.id}`} onClick={e => handleSectionClick(e, section.id)}>
                  {section.title}
                </HoverRotate>
              ))}
            </div>
            <div className="flex flex-col gap-s100">
              <span className="text-primary-muted/72 inline-block border-b border-primary-muted/35 pb-1 w-fit">Socials</span>
              {social_links.map(social => (
                <HoverRotate key={social.label} as="a" href={social.href} target="_blank" rel="noopener noreferrer" className="text-primary-muted">
                  {social.title}
                </HoverRotate>
              ))}
            </div>
          </div>
          <div className="text-primary-muted/72  flex justify-between items-center pt-4 border-t border-primary-muted/35">
            <span className="text-xs">{contact_info.credits}</span>
            <span className="text-xs">{contact_info.copyright}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
