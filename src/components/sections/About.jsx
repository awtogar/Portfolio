import { BaseSection, CardParallax, CreativeButton, TextReveal, HeadLineLabel, HoverRotate } from '@/components';
import { aboutImages } from '@/assets';
import { useState, useRef, useEffect } from 'react';
import { cursorPresets } from '@/cursor';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const resumeLink = '/assets/RESUME-AWALUDDIN_TOGAR.pdf';

const aboutDescription =
  'Interested in Engineering and Creative Stuff. I enjoy to learning something new by doing and looking at problems from different angles to figuring out how it works and understanding the best practices.';

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const distance = () => containerRef.current.offsetHeight - imageRef.current.offsetHeight;

      gsap.to(imageRef.current, {
        y: distance,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: () => `+=${distance()}`,
          scrub: 1,
          // markers: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <BaseSection sectionID="about">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:grid-cols-12 md:grid md:gap-6 lg:gap-8">
          {/* left column */}
          <div ref={containerRef} className="flex md:col-span-8 md:justify-start lg:col-span-8">
            <div className="flex-col flex md:mb-6">
              <h2 className="text-h500 text-primary uppercase display-heading">Myself</h2>
              <div className="hidden md:block">
                <span className="text-h200 text-primary max-w-[26ch] display-bold tracking-tight text-justify block">{aboutDescription}</span>
              </div>
            </div>
          </div>
          {/* right column */}
          <div className="md:col-span-4 lg:col-span-4 md:h-full">
            <div className="flex flex-col ">
              {/* slide to bottom of left column high aniamtion. trggered by scrol to  */}
              <div ref={imageRef} className="block mb-6 md:mb-0">
                <CardParallax src={aboutImages} alt="Awaluddin Togar" scrollRange={['-4%', '4%']} objectPosition="top" containerClassName="w-full aspect-video rounded-xl" />
              </div>
              <div className="md:hidden block mt-2">
                <span className="text-h400 text-primary font-[500] leading-[1.2] -tracking-[0.02em] block">{aboutDescription}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default About;
