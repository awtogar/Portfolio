import { BaseSection, CardParallax, CreativeButton, TextReveal } from '@/components';
import { me01 } from '@/assets';
import { RiArrowDownLine, RiArrowRightUpLine } from '@remixicon/react';

const WhoamiSection = () => {
  return (
    <BaseSection containerID="who-am-i">
      <div className="flex flex-col">
        <div className="flex flex-col mb-s200">
          <TextReveal as="span">
            <span className="text-base-sm leading-heading tracking-body font-[450] uppercase text-primary-muted">Introduce</span>
          </TextReveal>
          <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              WHO I AM
            </TextReveal>
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              (?)
            </TextReveal>
          </div>
        </div>
        {/* <div className="flex justify-between md:grid md:grid-cols-12 md:items-end">
          <TextReveal as="h2" className="text-h100 heading-display font-bold md:col-span-7">
            WHO I AM
          </TextReveal>
          <TextReveal as="h2" className="text-h100 heading-display font-bold text-right md:col-span-5">
            (?)
          </TextReveal>
        </div> */}

        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-6 lg:gap-8 mt-s200">
          <div className="md:col-span-6 md:pr-12 flex justify-center md:justify-start">
            <CardParallax
              src={me01}
              alt="Awaluddin Togar"
              scrollRange={['-4%', '4%']}
              containerClassName="w-full aspect-[3/4] max-h-[60vh] md:w-full md:h-auto md:max-h-full md:aspect-[4/5] lg:h-[70vh] lg:aspect-[9/10] rounded-xl"
            />
          </div>
          <div className="md:col-span-6">
            <div className="flex flex-col h-full justify-between gap-s400">
              <div className="relative block">
                <TextReveal as="p" className="text-h500 tracking-body leading-body font-[450]">
                  <span>2 years experiences through Freelancing with worldwide clients since 2022 - 2024 before taking two internships at big companies.</span>
                </TextReveal>
              </div>

              <div className="relative block">
                <div className="md:hidden flex gap-3">
                  <CreativeButton
                    data-cursor
                    data-cursor-content="view"
                    data-cursor-fill="primary"
                    data-cursor-text-color="secondary"
                    data-cursor-size="large"
                    className="flex-1 justify-center"
                  >
                    <span className="text-h600 tracking-heading leading-heading font-[450]">Download CV</span>
                  </CreativeButton>
                  <CreativeButton
                    data-cursor
                    data-cursor-content="view"
                    data-cursor-fill="primary"
                    data-cursor-text-color="secondary"
                    data-cursor-size="large"
                    className="flex-1 justify-center"
                  >
                    <span className="text-h600 tracking-heading leading-heading font-[450]">About me</span>
                  </CreativeButton>
                </div>

                <div className="hidden md:flex justify-between items-center gap-4">
                  <div className="flex items-center">
                    <p className="text-h600 tracking-heading leading-heading font-[450]">About me</p>
                    <RiArrowRightUpLine size={20} />
                  </div>
                  <CreativeButton
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

export default WhoamiSection;
