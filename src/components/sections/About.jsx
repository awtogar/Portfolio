import { BaseSection, CardParallax, CreativeButton, TextReveal, HeadLineLabel, HoverRotate } from '@/components';
import { aboutImages } from '@/assets';
import { useNavigation } from '@/hooks/useNavigation';
import { useState } from 'react';
import { cursorPresets } from '@/cursor';

const resumeLink = '/assets/RESUME-AWALUDDIN_TOGAR.pdf';

const aboutItems = [
  {
    title: 'Experience',
    content:
      '2 years freelancing as a Graphic Designer for clients worldwide (@nostratic.archv), followed by two internships: Assets & Art Data Administrator at Kompas Gramedia/Bentara Budaya (MSIB Batch 7), and IT Operations & Digital Strategic at Bank Negara Indonesia (Kemnaker program).',
  },
  {
    title: 'Education',
    content:
      'Fresh graduate in Information Systems from Universitas Nusa Mandiri, graduating in August 2025 with a GPA of 3.88.',
  },
];

const About = () => {
  const { handleNavClick } = useNavigation();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <BaseSection sectionID="about">
      <div className="flex flex-col">
        <HeadLineLabel label="(A BIT)" headline="ABOUT ME" />
        <div className="flex flex-col gap-4 mt-s200 md:grid md:grid-cols-12 md:gap-6 lg:gap-8">
          <div className="flex justify-center md:col-span-7 md:justify-start lg:col-span-6">
            <CardParallax
              src={aboutImages}
              alt="Awaluddin Togar"
              scrollRange={['-4%', '4%']}
              containerClassName="w-full max-h-[60vh] aspect-[3/4] rounded-xl md:w-auto md:h-[65vh] md:max-w-full md:max-h-[70vh] md:aspect-[3/4] lg:h-[70vh] lg:max-w-full lg:max-h-[75vh] lg:aspect-[9/10]"
            />
          </div>
          <div className="md:col-span-5 lg:col-span-6 ">
            <div className="flex flex-col justify-between h-full gap-s400">
              <div className="mt-4 md:mt-2 flex flex-1 flex-col">
                <div className="mb-s200">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-base-sm uppercase text-primary">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-current" />
                      <span className="relative w-2 h-2 rounded-full bg-current" />
                    </span>
                    Open to work
                  </span>
                </div>

                <div className="flex flex-col md:flex-1 md:justify-center">
                  {aboutItems.map((item, index) => {
                    const isOpen = openIndex === index;
                    const isDimmed = openIndex !== null && !isOpen;
                    return (
                      <div key={item.title} className={`border-b border-primary/15 ${index === 0 ? 'border-t' : ''}`}>
                        <button
                          {...cursorPresets.click}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`about-panel-${index}`}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full grid grid-cols-[2.5rem_1fr_auto] items-center py-s200 text-left cursor-pointer group"
                        >
                          <span className="text-base-sm text-neutral-400 tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={`text-h500 font-[450] leading-heading tracking-heading transition-colors duration-300 group-hover:text-primary ${isDimmed ? 'text-primary/40' : 'text-primary'
                              }`}
                          >
                            {item.title}
                          </span>
                          <span className="relative w-3 h-3 shrink-0 text-primary" aria-hidden="true">
                            <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                            <span
                              className={`absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${isOpen ? 'scale-y-0' : 'scale-y-100'
                                }`}
                            />
                          </span>
                        </button>

                        <div
                          id={`about-panel-${index}`}
                          aria-hidden={!isOpen}
                          className="grid transition-all duration-400 ease-out overflow-hidden"
                          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                        >
                          <div className="overflow-hidden">
                            <div className="relative pl-10 pb-s200">
                              <TextReveal
                                as="p"
                                className="text-base font-[450] leading-body tracking-body text-left text-primary/80 max-w-[52ch]"
                              >
                                <span>{item.content}</span>
                              </TextReveal>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="block relative">
                <div className="flex gap-3 md:hidden">
                  <CreativeButton
                    fillColor1="bg-surface-invert"
                    fillColor2="bg-neutral-100"
                    textcolor1="text-secondary"
                    textcolor2="text-primary"
                    outlineColor="outline-surface-invert"
                    {...cursorPresets.view}
                    className="flex-1 justify-center too good"
                  >
                    <span className="text-h500 font-[450] leading-heading tracking-heading whitespace-nowrap">Get in touch</span>
                  </CreativeButton>

                  <CreativeButton
                    fillColor1="bg-neutral-100"
                    fillColor2="bg-surface-invert"
                    textcolor1="text-primary"
                    textcolor2="text-secondary"
                    outlineColor="outline-surface-invert"
                    {...cursorPresets.view}
                    className="flex-1 justify-center"
                  >
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="text-h500 font-[450] leading-heading tracking-heading whitespace-nowrap">
                      Download CV
                    </a>
                  </CreativeButton>
                </div>
                <div className="hidden md:flex-col md:flex gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-base-sm text-neutral-400 tracking-wide uppercase">Recruiting?</span>
                    <a
                      href={resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...cursorPresets.view}
                      className="text-base font-[450] leading-heading tracking-heading text-primary  transition-colors duration-300 underline underline-offset-4 decoration-primary/20 hover:decoration-primary/60"
                    >
                      Resume
                    </a>
                  </div>

                  <div className="w-px self-stretch bg-primary/15" />

                  <div className="flex flex-col gap-1">
                    <span className="text-base-sm text-neutral-400 tracking-wide uppercase">Say hello</span>
                    <a
                      {...cursorPresets.view}
                      onClick={e => handleNavClick(e, { sectionId: 'contact' })}
                      className="text-base font-[450] leading-heading tracking-heading text-primary transition-colors duration-300 underline underline-offset-4 decoration-primary/20 hover:decoration-primary/60 cursor-pointer"
                    >
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default About;
