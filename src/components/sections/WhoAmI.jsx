import { BaseSection, CardParallax, CreativeButton, TextReveal, HeadLineLabel } from '@/components';
import { me01 } from '@/assets';
import { RiArrowDownLine, RiArrowRightUpLine } from '@remixicon/react';

const WhoAmI = () => {
  return (
    <BaseSection sectionID="about">
      <div className="flex flex-col">
        <HeadLineLabel label="SHORT of about" headline="introduction" />
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-6 lg:gap-8 mt-s200">
          <div className="md:col-span-6 md:pr-12 flex justify-center md:justify-start">
            <CardParallax
              src={me01}
              alt="Awaluddin Togar"
              scrollRange={['-4%', '4%']}
              containerClassName=" w-full aspect-[3/4] max-h-[60vh] md:w-auto md:h-[65vh] md:max-h-[70vh] md:max-w-[85%] md:aspect-[3/4] lg:h-[70vh] lg:max-h-[75vh] lg:max-w-full lg:aspect-[9/10] rounded-xl"
            />
          </div>
          <div className="md:col-span-6">
            <div className="flex flex-col h-full justify-between gap-s400">
              <div className="relative block">
                <TextReveal as="p" className="text-h500 tracking-body leading-body font-[450]">
                  <span>
                    Awaluddin Togar — with 2 years experiences through Freelancing with worldwide clients since 2022 - 2024 before taking two internships at big companies.
                  </span>
                </TextReveal>
              </div>

              <div className="relative block">
                <div className="md:hidden flex gap-3">
                  <CreativeButton
                    data-cursor
                    variant="fill"
                    size="sm"
                    data-cursor-content="view"
                    data-cursor-fill="primary"
                    data-cursor-text-color="secondary"
                    data-cursor-size="large"
                    className="flex-1 justify-center"
                  >
                    <span className="text-h500 tracking-heading leading-heading font-[450] whitespace-nowrap">Get in touch</span>
                  </CreativeButton>

                  <CreativeButton
                    data-cursor
                    variant="outline"
                    size="sm"
                    data-cursor-content="view"
                    data-cursor-fill="primary"
                    data-cursor-text-color="secondary"
                    data-cursor-size="large"
                    className="flex-1 justify-center"
                  >
                    <a href="https://example.com/to-download-cv" className="text-h500 tracking-heading leading-heading font-[450] whitespace-nowrap">
                      Download CV
                    </a>
                  </CreativeButton>
                </div>

                <div className="hidden md:flex justify-between items-center gap-4">
                  <div className="flex items-center justify-baseline">
                    <span className=" flex text-h600 tracking-heading leading-heading font-[450]">Get in touch</span>
                    <CreativeButton variant="transparent">
                      <RiArrowRightUpLine size={24} />
                    </CreativeButton>
                  </div>
                  <CreativeButton
                    href="https://example.com/to-download-cv"
                    data-cursor
                    data-cursor-magnetic
                    data-cursor-content="view"
                    data-cursor-fill="primary"
                    data-cursor-text-color="secondary"
                    variant=""
                    width="64px"
                    height="64px"
                    className="bg-primary text-secondary rounded-full flex items-center justify-center"
                  >
                    <RiArrowDownLine className="w-12 h-12" />
                  </CreativeButton>
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
