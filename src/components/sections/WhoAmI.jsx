import { BaseSection, CardParallax, CreativeButton, TextReveal, HeadLineLabel } from '@/components';
import { myPhoto } from '@/assets';
import { useNavigation } from '@/hooks/useNavigation';

const resumeLink = 'https://example.com/to-download-cv';

const WhoAmI = () => {
  const { handleNavClick } = useNavigation();
  return (
    <BaseSection sectionID="about">
      <div className="flex flex-col">
        <HeadLineLabel label="introduce of" headline="About" headlineSuffix="me" />
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-6 lg:gap-8 mt-s200">
          <div className="md:col-span-7 lg:col-span-6 flex justify-center md:justify-start">
            <CardParallax
              src={myPhoto}
              alt="Awaluddin Togar"
              scrollRange={['-4%', '4%']}
              containerClassName=" w-full aspect-[3/4] max-h-[60vh] md:w-auto md:h-[65vh] md:max-h-[70vh] md:max-w-full md:aspect-[3/4] lg:h-[70vh] lg:max-h-[75vh] lg:max-w-full lg:aspect-[9/10] rounded-xl"
            />
          </div>
          <div className="md:col-span-5 lg:col-span-6">
            <div className="flex flex-col h-full justify-between gap-s400">
              <div className="flex flex-col">
                <div className="relative block">
                  <TextReveal as="p" className="text-h500 tracking-body leading-body font-[450] text-justify">
                    <span>
                      Hey everyone — I’m Awaluddin Togar. I have 2 years of experience as a Graphic Designer, working with clients worldwide through freelancing at @Nostratic.archv from 2022 to 2024.
                    </span>
                  </TextReveal>
                </div>
                <div className="relative block">
                  <TextReveal as="p" className="text-h500 tracking-body leading-body font-[450] text-justify">
                    <span>
                      I’m a fresh graduate from Universitas Nusa Mandiri with a 3.8 GPA, graduating in August 2025. I’ve also gained experience through internships at several established companies.
                    </span>
                  </TextReveal>
                </div>
              </div>

              <div className="relative block">
                <div className="md:hidden flex gap-3">
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
                    className="flex-1 too good justify-center"
                  >
                    <span className="text-h500 tracking-heading leading-heading font-[450] whitespace-nowrap">Get in touch</span>
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
                    <a href={resumeLink} className="text-h500 tracking-heading leading-heading font-[450] whitespace-nowrap">
                      Download CV
                    </a>
                  </CreativeButton>
                </div>

                <div className="hidden md:flex justify-between">
                  <div className="flex gap-4">
                    <span>Let's</span>

                    <a
                      onClick={e => handleNavClick(e, { sectionId: 'contact' })}
                      className="
                      relative
                      after:absolute
                      after:left-0
                      after:-bottom-0.5
                      after:h-[2px]
                      after:w-0
                      after:bg-primary
                      after:transition-[width]
                      after:duration-300
                      after:ease-out
                      hover:after:w-full
                    "
                    >
                      Connect
                    </a>
                  </div>

                  <span>or</span>

                  <div className="flex gap-2">
                    <span>My</span>
                    <a
                      className="
                      relative
                      after:absolute
                      after:left-0
                      after:-bottom-0.5
                      after:h-[2px]
                      after:w-0
                      after:bg-primary
                      after:transition-[width]
                      after:duration-300
                      after:ease-out
                      hover:after:w-full
                    "
                    >
                      resume
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
