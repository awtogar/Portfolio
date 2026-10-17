import { BaseSection, CardParallax, CreativeButton, TextReveal, HoverRotate } from '@/components';
import { aboutImages } from '@/assets';
import { useState, useRef, useEffect } from 'react';
import { cursorPresets } from '@/cursor';
import { gsap, SplitText } from '@/lib/gsap';

const resumeLink = '/assets/RESUME-AWALUDDIN_TOGAR.pdf';

const aboutDescription =
  'Interested in Engineering and Creative Stuff. I enjoy to learning something new by doing and looking at problems from different angles to figuring out how it works and understanding the best practices.';

// Indeks kata yang tersembunyi pada state awal (partial)
const PARTIAL_HIDDEN_WORDS = [1, 4, 7, 10, 12, 15, 18, 21, 23, 26, 29, 31];

const AboutText = ({ textRef, className }) => (
  <span className={`relative block ${className}`}>
    <span ref={textRef} className="block">
      {aboutDescription}
    </span>
  </span>
);

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const desktopTextRef = useRef(null);
  const mobileTextRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const splitInstances = [];

    const createTextTransition = element => {
      if (!element) return;

      const split = new SplitText(element, { type: 'words' });
      splitInstances.push(split);

      // Ambil kata-kata yang tadinya disembunyikan (hidden words)
      const hiddenWords = split.words.filter((_, index) => PARTIAL_HIDDEN_WORDS.includes(index));

      // State awal: sembunyikan hanya kata-kata yang hilang
      gsap.set(hiddenWords, { opacity: 0 });

      // Timeline scrolltrigger: tinggal memunculkan kata-kata yang hilang secara random/stagger
      gsap.to(hiddenWords, {
        opacity: 1,
        duration: 0.1,
        ease: 'expo',
        stagger: {
          each: 0.02,
          from: 'random',
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 35%',
          scrub: true,
          // markers: true,
          invalidateOnRefresh: true,
        },
      });
    };

    createTextTransition(desktopTextRef.current);
    createTextTransition(mobileTextRef.current);

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
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      mm.revert();
      splitInstances.forEach(split => split.revert());
    };
  }, []);

  return (
    <BaseSection sectionID="about">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:grid-cols-12 md:grid md:gap-6 lg:gap-8">
          {/* left column */}
          <div ref={containerRef} className="flex md:col-span-8 md:justify-start lg:col-span-8">
            <div className="flex-col flex md:mb-6">
              <h2 className="text-h500 text-primary uppercase display-heading">Myself</h2>

              {/* render text content on md screen instead */}
              <div className="hidden md:block">
                {/* textRef */}
                <AboutText textRef={desktopTextRef} className="text-h200 text-primary max-w-[26ch] display-bold tracking-tight text-justify" />
              </div>
            </div>
          </div>
          {/* right column */}
          <div className="md:col-span-4 lg:col-span-4 md:h-full">
            <div className="flex flex-col">
              {/* slide to bottom of left column high aniamtion. trggered by scrol to  */}
              <div ref={imageRef} className="block mb-6 md:mb-0">
                <CardParallax src={aboutImages} alt="Awaluddin Togar" scrollRange={['-10%', '10%']} objectPosition="top" containerClassName="w-full aspect-video rounded-xl" />
              </div>
              {/* render text content on mobile screen */}
              {/* textRef */}
              <div className="md:hidden block mt-2">
                <AboutText textRef={mobileTextRef} className="text-h400 text-primary font-[500] leading-[1.2] -tracking-[0.02em]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default About;
