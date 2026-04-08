import { HoverRotate, CreativeButton } from '..';
import { RiCornerDownRightLine } from '@remixicon/react';
import { contact_info, socials } from '../../data/data';
import { useFooter } from './useFooter';
import { LetterScroll } from '../ui/LetterScroll';

const Footer = () => {
  const { currentPage, handleSectionClick } = useFooter();

  return (
    <footer id="contact" className="z-10 section-padding-x">
      <div className="m-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]">
        <LetterScroll lines={['MODERN', 'TECH STACK']} start="top 80%" end="bottom 0%" scrub={0.5} />
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
                {socials.map(social => (
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
      </div>
    </footer>
  );
};

export default Footer;
