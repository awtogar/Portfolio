
import { HoverRotate, CreativeButton } from '..';
import { RiCornerDownRightLine } from '@remixicon/react';
import { contact_info, socials } from '../../data/data';
import { useFooter } from '../../utils/footerHandling';
import { useCursorHover } from '../../hooks/useCursorEffect';

const Footer = () => {
  const { currentPage, isContactPage, handleSectionClick, handleTellUsClick } = useFooter();
  const ctaRef = useCursorHover('arrow');

  return (
    <footer id="contact" className="z-10 section-padding-xy">
      <div className="m-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]">
        <div className="flex flex-col h-screen">
          <div className="flex flex-col gap-s100 justify-between items-center text-center flex-1">
            <div className="flex-1 flex items-center">
              <div className="flex flex-col">
                <div className="flex flex-col pb-s600">
                  <h2 className="text-3xl text-center italic">
                    <span className="text-5xl">Have</span> an idea
                    <br />
                    in <span className="text-5xl leading-snug">Mind?.</span>
                  </h2>
                  <p className="text-center">Let's work together.</p>
                </div>
                <CreativeButton
                ref={ctaRef}
                  variant="outline"
                  {...(isContactPage
                    ? { onClick: handleTellUsClick }
                    : { to: '/contact' })}
                >
                  TELL US
                </CreativeButton>
              </div>
            </div>
            <div className="flex flex-col pb-s600 w-full">
              <HoverRotate href="mailto:info@awtogar.com" variant="outline" target="_blank" rel="noopener noreferrer" className="justify-center">
                <span className="text-primary-muted">Have any questions?</span>
                <span className="flex items-center text-primary font-semibold">
                  <RiCornerDownRightLine size={24} />
                  <span>{contact_info.email}</span>
                </span>
              </HoverRotate>
            </div>
          </div>
        </div>
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
