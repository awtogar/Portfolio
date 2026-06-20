import { BaseSection, CardParallax, TextReveal } from '@/components';
import { me01 } from '@/assets';
import { RiArrowRightUpLongLine } from '@remixicon/react';

const WhoamiSection = () => {
  return (
    <BaseSection containerID="who-am-i">
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            WHO I AM
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              (?)
            </TextReveal>
          </div>
        </div>
        <div className="flex flex-col gap-s400 md:grid md:grid-cols-6 mt-s500">
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <CardParallax
              src={me01}
              alt="Awaluddin Togar"
              scrollRange={['-4%', '4%']}
              containerClassName="w-full aspect-[3/4] max-h-[60vh] md:w-auto md:h-[65vh] md:max-h-none md:aspect-[4/5] lg:h-[70vh] lg:aspect-[9/10] rounded-xl"
            />
          </div>
          <div className="md:col-span-3">
            <div className="flex flex-col h-full justify-between">
              <div className="relative block">
                <TextReveal as="p" className="text-h500 tracking-heading leading-heading font-[450]">
                  <span>I have been working with 2 years experiences through Freelancing since 2022 with worldwide clients since 2022 - 2024 after that taking two internships at big companies.</span>
                </TextReveal>
              </div>

              <div className="relative block">
                <div className="flex justify-between items-end gap-4">
                  <p className="text-h400">See my profile</p>
                  <div className="">
                    <div className="md:hidden">
                      <RiArrowRightUpLongLine className="w-12 h-12 md:w-20 md:h-20" />{' '}
                    </div>
                    <div
                      data-cursor
                      data-cursor-magnetic
                      data-cursor-sticky
                      data-cursor-fill="primary"
                      data-cursor-text-color="secondary"
                      data-cursor-size="large"
                      data-cursor-content="See"
                      data-cursor-color="secondary"
                      className="hidden md:block bg-primary text-secondary p-2"
                    >
                      <RiArrowRightUpLongLine className="w-12 h-12 md:w-16 md:h-16" />{' '}
                    </div>
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

export default WhoamiSection;
