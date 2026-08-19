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
        <div className="flex flex-col gap-4 mt-s200 md:grid md:grid-cols-12 md:gap-6 lg:gap-8">
          <div className="flex justify-center md:col-span-7 md:justify-start lg:col-span-6">
            <CardParallax
              src={myPhoto}
              alt="Awaluddin Togar"
              scrollRange={['-4%', '4%']}
              containerClassName="w-full max-h-[60vh] aspect-[3/4] rounded-xl md:w-auto md:h-[65vh] md:max-w-full md:max-h-[70vh] md:aspect-[3/4] lg:h-[70vh] lg:max-w-full lg:max-h-[75vh] lg:aspect-[9/10]"
            />
          </div>
          <div className="md:col-span-5 lg:col-span-6">
            <div className="flex flex-col justify-between h-full gap-s400">
              <div className="flex flex-col">
                <div className="block relative">
                  <TextReveal as="p" className="text-h500 font-[450] leading-body tracking-body text-justify">
                    <span>
                      Hey everyone — I’m Awaluddin Togar. I have 2 years of experience as a Graphic Designer, working with clients worldwide through freelancing at @Nostratic.archv from 2022 to 2024.
                    </span>
                  </TextReveal>
                </div>
                <div className="block relative">
                  <TextReveal as="p" className="text-h500 font-[450] leading-body tracking-body text-justify">
                    <span>
                      I’m a fresh graduate from Universitas Nusa Mandiri with a 3.8 GPA, graduating in August 2025. I’ve also gained experience through internships at several established companies.
                    </span>
                  </TextReveal>
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
                    <a href={resumeLink} className="text-h500 font-[450] leading-heading tracking-heading whitespace-nowrap">
                      Download CV
                    </a>
                  </CreativeButton>
                </div>

                <div className="hidden md:flex md:justify-between">
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
