import { BaseSection, CardParallax, CreativeButton, TextReveal, HeadLineLabel, HoverRotate } from '@/components';
import { aboutImages } from '@/assets';
import { useNavigation } from '@/hooks/useNavigation';
import { useState } from 'react';

const resumeLink = 'https://example.com/to-download-cv';

const aboutItems = [
  {
    title: 'Experience',
    content:
      'Hey everyone — I’m Awaluddin Togar. I have 2 years of experience as a Graphic Designer, working with clients worldwide through freelancing at @Nostratic.archv from 2022 to 2024.',
  },
  {
    title: 'Education',
    content:
      'I’m a fresh graduate from Universitas Nusa Mandiri with a 3.8 GPA, graduating in August 2025. I’ve also gained experience through internships at several established companies.',
  },
];

const WhoAmI = () => {
  const { handleNavClick } = useNavigation();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <BaseSection sectionID="about">
      <div className="flex flex-col">
        <HeadLineLabel label="introduce of" headline="About" headlineSuffix="me" />
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
              <div className="mt-4 md:mt-2 flex flex-1 flex-col justify-center">
                {aboutItems.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={item.title} className={`border-b border-primary/15 ${index === 0 ? 'border-t' : ''}`}>
                      <button
                        data-cursor
                        data-cursor-content="Click"
                        data-cursor-fill="primary"
                        data-cursor-text-color="secondary"
                        data-cursor-size="small"

                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-6 py-s200 text-left cursor-pointer"
                      >
                        <span className="flex items-center gap-4">
                          <span className={`text-h500 font-[450] leading-heading tracking-heading ${isOpen ? 'text-primary/50' : ''}`}>{item.title}</span>
                        </span>
                        <span className={`text-xl leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
                      </button>

                      <div className="grid transition-all duration-400 ease-out overflow-hidden" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                        <div className="overflow-hidden">
                          <div className="block relative pb-s200">
                            <TextReveal as="p" className={`text-base font-[450] text-neutral-400 leading-body tracking-body text-justify ${isOpen ? 'text-primary/80' : ''}`}>
                              <span>{item.content}</span>
                            </TextReveal>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="block relative">
                <div className="flex gap-3 md:hidden">
                  <CreativeButton
                    fillColor1="bg-surface-invert"
                    fillColor2="bg-neutral-100"
                    textcolor1="text-secondary"
                    textcolor2="text-primary"
                    outlineColor="outline-surface-invert"
                    data-cursor
                    data-cursor-content="view"
                    data-cursor-fill="primary"
                    data-cursor-text-color="secondary"
                    data-cursor-size="large"
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
                    data-cursor
                    data-cursor-content="view"
                    data-cursor-fill="primary"
                    data-cursor-text-color="secondary"
                    data-cursor-size="large"
                    className="flex-1 justify-center"
                  >
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="text-h500 font-[450] leading-heading tracking-heading whitespace-nowrap">
                      Download CV
                    </a>
                  </CreativeButton>
                </div>

                {/* fixed hierarchy */}
                <div className="hidden md:flex-col md:flex gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-neutral-400 tracking-wide uppercase">Recruiting?</span>
                    <a
                      href={resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor
                      data-cursor-content="View"
                      data-cursor-fill="primary"
                      data-cursor-text-color="secondary"
                      className="text-base font-[450] leading-heading tracking-heading text-primary  transition-colors duration-300 underline underline-offset-4 decoration-primary/20 hover:decoration-primary/60"
                    >
                      Resume
                    </a>
                  </div>

                  <div className="w-px self-stretch bg-primary/15" />

                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-neutral-400 tracking-wide uppercase">Say hello</span>
                    <a
                      data-cursor
                      data-cursor-content="view"
                      data-cursor-fill="primary"
                      data-cursor-text-color="secondary"
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

export default WhoAmI;
