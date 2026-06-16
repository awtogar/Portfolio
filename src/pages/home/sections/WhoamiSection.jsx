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
        <div className="flex flex-col-reverse gap-s400 md:grid md:grid-cols-6 mt-s500">
          <div className="md:col-span-3 h-[70vw] md:h-[55vh]">
            <CardParallax src={me01} alt="Awaluddin Togar" scrollRange={['-4%', '4%']} containerClassName="w-full h-full rounded-xl" />
          </div>
          <div className="md:col-span-3">
            <div className="flex flex-col h-full justify-between">
              <div className="relative block">
                <div className="flex flex-col">
                  <TextReveal as="p" className="text-h500 heading-display font-[450]">
                    <span>Graduated in 2025</span>
                  </TextReveal>
                  <TextReveal as="p" className="text-h500 font-[450] heading-display">
                    <span>Working since 2022 through Freelancing with world wide clients - two internships at big company.</span>
                  </TextReveal>
                </div>
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
                      data-cursor-content="arrow"
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
