import { BaseSection, CardParallax } from "@/components";
import { aboutImages } from "@/assets";
import { useState, useRef, useEffect } from "react";
import { gsap, SplitText } from "@/lib/gsap";
import { useCursorTarget } from "@/cursor";
import { RiArrowRightUpLine } from "@remixicon/react";

const resumeLink = "/assets/RESUME-AWALUDDIN_TOGAR.pdf";

const aboutDescription =
  "A passionate design engineer that interested in exploring technology and learning new things fields like Web Development, Creative Design and Following Trends with strong problem solving skills to create solutions that fit the needs with effective and enjoyable result.";

// Indeks kata yang tersembunyi pada state awal (partial)
const PARTIAL_HIDDEN_WORDS = [2, 7, 9, 15, 21, 23, 28, 31];
const lastSpaceIndex = aboutDescription.lastIndexOf(" ");
const descriptionLead = aboutDescription.slice(0, lastSpaceIndex + 1);
const descriptionTail = aboutDescription.slice(lastSpaceIndex + 1);

const AboutText = ({ textRef, className }) => {
  const cursorResumeTarget = useCursorTarget({ label: null });

  return (
    <div className={`relative block ${className}`}>
      <span ref={textRef} className="block">
        {descriptionLead}
        <span className="whitespace-nowrap">
          {descriptionTail}
          <a
            {...cursorResumeTarget}
            href={resumeLink}
            className="ml-0 lg:ml-4 inline-block align-middle text-base text-neutral-500 font-[500] leading-[1.2] -tracking-[0.02em] border-b border-neutral-500 hover:border-fg hover:text-fg transition-colors duration-300"
          >
            <RiArrowRightUpLine />
          </a>
        </span>
      </span>
    </div>
  );
};

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const desktopTextRef = useRef(null);
  const mobileTextRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const splitInstances = [];

    const createTextTransition = (element) => {
      if (!element) return;

      const split = new SplitText(element, { type: "words", aria: false });
      splitInstances.push(split);

      // Ambil kata-kata yang tadinya disembunyikan (hidden words)
      const hiddenWords = split.words.filter((_, index) =>
        PARTIAL_HIDDEN_WORDS.includes(index)
      );

      // State awal: sembunyikan hanya kata-kata yang hilang
      gsap.set(hiddenWords, { opacity: 0 });

      // Timeline scrolltrigger: tinggal memunculkan kata-kata yang hilang secara random/stagger
      gsap.to(hiddenWords, {
        opacity: 1,
        duration: 0.25,
        ease: "none",
        stagger: {
          each: 0.15,
          from: "random",
        },
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 10%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    createTextTransition(desktopTextRef.current);
    createTextTransition(mobileTextRef.current);

    mm.add("(min-width: 768px)", () => {
      const distance = () =>
        containerRef.current.offsetHeight - imageRef.current.offsetHeight;

      gsap.to(imageRef.current, {
        y: distance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: () => `+=${distance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      mm.revert();
      splitInstances.forEach((split) => split.revert());
    };
  }, []);

  return (
    <BaseSection sectionID="about">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:grid-cols-12 md:grid md:gap-6 lg:gap-8">
          {/* left column */}
          <div ref={containerRef} className="flex md:col-span-8 lg:col-span-7">
            <div className="flex-col flex md:mb-6">
              <h2 className="text-h500 text-fg uppercase display-heading">
                Myself
              </h2>
              <div className="hidden md:block">
                <AboutText
                  textRef={desktopTextRef}
                  className="text-h300 lg:text-h200 text-fg lg:max-w-[26ch] display-bold tracking-tight text-left lg:text-justify"
                />
              </div>
            </div>
          </div>
          {/* right column */}
          <div className="md:col-span-4 lg:col-span-5 md:h-full">
            <div className="flex flex-col">
              <div ref={imageRef} className="block mb-6 md:mb-0">
                <CardParallax
                  src={aboutImages}
                  alt="Awaluddin Togar Profile"
                  scrollRange={["-10%", "10%"]}
                  objectPosition="top"
                  containerClassName="w-full aspect-video rounded-xl"
                />
              </div>
              {/* render text content on mobile screen */}
              <div className="md:hidden block mt-2">
                <AboutText
                  textRef={mobileTextRef}
                  className="text-h400 text-fg font-[500] leading-[1.2] -tracking-[0.02em]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default About;
