import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { RiAddLine, RiSubtractLine } from '@remixicon/react';
import useVideoInView from '../hooks/useVideoInView';
import { services, works } from '../data/data';
import video1 from '/src/assets/videos/video-1.mp4';
import video2 from '/src/assets/videos/video-2.mp4';
import PrimaryButton from '../components/ui/CreativeButton/PrimaryButton';
import { useScrollToSection } from '../utils/scrollToSection';
import LinkItems from '../components/HoverLink';

const HomePage = () => {
  const video1Loader = useVideoInView();
  const video2Loader = useVideoInView();
  const scrollToSection = useScrollToSection();

  return (
    <>
      {/* Hero Section */}
      <section id="home-hero" className="z-10 section-padding-hero">
        <div className="m-auto w-full lg:max-w-[1408px]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-s600">
              <h1 className="text-display">Graphics and web designer enthusiast</h1>
              <p>I'm a person with a multidisciplinary background in design and development — learning through doing.</p>
            </div>
            <div className="flex items-center gap-s400 pt-s600">
              <div className="flex-1">
                <PrimaryButton
                  to="/contact"
                  background1="bg-primary"
                  background2="bg-brand-secondary"
                  outline2="outline-none"
                  outline1="outline-none"
                  textcolor1="text-secondary"
                  textcolor2="text-primary"
                >
                  Get in touch
                </PrimaryButton>
              </div>
              <div className="flex-shrink-0">
                <PrimaryButton
                  href="https://www.linkedin.com/in/awaluddintogar/"
                  background1="transparent"
                  background2="bg-primary"
                  outline2="outline-none"
                  outline1="outline outline-1 outline-primary"
                  textcolor1="text-primary"
                  textcolor2="text-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My resume
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section 1 */}
      <section className="z-10">
        <div className="m-auto w-full">
          <div className="h-[468px] overflow-hidden">
            <video ref={video1Loader} loop muted playsInline className="w-full h-full object-cover" preload="none">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section className="z-10 section-padding-xy">
        <div className="m-auto w-full">
          <div className="flex flex-col gap-s800">
            <div className="flex flex-col gap-s300">
              <h2 className="text-h100 uppercase">
                be <span className="text-brand-tertiary">impactful</span>
              </h2>
              <div className="h-[286px] overflow-hidden rounded-lg">
                <video ref={video2Loader} loop muted playsInline className="w-full h-full object-cover" preload="none">
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-s300">
              <p>
                Turning the visions into reality based on <span className="text-brand-tertiary">the use case</span> and concepts resulting brand stories.
              </p>
              <div className="flex flex-wrap gap-s200">
                {Array.from(new Set(services.flatMap(service => service.tags))).map((tag, index) => (
                  <div key={index} className="tags">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Works Section */}
      <section id="home-services-works" className="z-10 section-padding-xy bg-primary text-brand-secondary rounded-3xl">
        <div className="m-auto w-full">
          {/* Services Header */}
          <div className="flex flex-col rounded-t-lg">
            <div className="flex w-full flex-col gap-s400">
              <h2 className="text-h100">
                HOW CAN I <br />
                HELP YOU?
              </h2>
              <div className="text-brand-secondary/80">
                <div className="flex flex-col gap-s200">
                  <div>
                    <span>(SERVICES)</span>
                  </div>
                  <p>As a graphic designer and web developer, I can help you create stunning visuals and seamless user experiences.</p>
                </div>
              </div>
            </div>
            {/* Services List */}
            <div className="w-full m-auto">
              <div className="mt-s900 gap-y-s800 flex flex-col justify-between">
                {services.map((service, index) => {
                  const topValue = `calc(10vh + ${index * 4.75}em)`;
                  const marginBottomValue = `${16 - index * 5}em`;
                  return (
                    <div key={index} className="sticky top-0 border-t border-t-neutral-100/40 bg-primary pt-s300" style={{ top: topValue, marginBottom: marginBottomValue }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-left font-semibold gap-s200 text-h200">
                          <span className="py-s100 font-mono">({service.number})</span>
                          <h3 className="capitalize">{service.title}</h3>
                        </div>
                        <div className="">
                          <RiAddLine />
                          <RiSubtractLine className="hidden" />
                        </div>
                      </div>
                      {/* Service Content */}
                      <div className="text-brand-secondary/80 pt-s400">
                        <p>{service.description}</p>
                        <div className="flex flex-col pt-s200">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center mt-s200 gap-s200">
                              <span className="font-mono text-base-sm">({feature.number})</span>
                              <span className="text-base-sm">{feature.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Works Section */}
          <div id="home-selected-works" className="flex flex-col space-300">
            <div className="flex w-full flex-col gap-s400">
              <h2 className="text-h100">
                SELECTED <br />
                WORKS
              </h2>
              <p className="text-brand-secondary/80 text-base-sm pt-s200">A showcase of my recent projects and collaborations.</p>
            </div>

            {/* Works List */}
            <div className="flex flex-col gap-s800">
              {works.map((work, index) => (
                <div key={index} className="space-300 pt-s600 pb-s200">
                  <div className="flex flex-col gap-s300">
                    <div className="h-[368px] overflow-hidden rounded-xl">
                      <img src={work.image} alt={work.title} className="w-full h-full object-cover hover:scale-102 transition-transform duration-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-h300">{work.title}</h3>
                      <div className="pt-s200 text-base-sm">
                        <span>
                          {work.date.month} - {work.date.year}
                        </span>
                      </div>
                    </div>
                    <div className="text-brand-secondary/80">
                      <p className="text-brand-secondary/80">{work.description}</p>
                      <div className="flex flex-wrap gap-s200 pt-s400">
                        {work.tags.map((tag, tagIndex) => (
                          <div key={tagIndex} className="tags-secondary">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="home-contact" className="z-10 section-padding-end">
        <div className="m-auto w-full flex flex-col h-screen">
          <div className="flex flex-col gap-s100 justify-center items-center text-center flex-1">
            <div className="flex flex-col">
              <h2 className="text-3xl text-center italic">
                <span className="text-5xl">Have</span> an idea
                <br />
                in <span className="text-5xl leading-snug">Mind?.</span>
              </h2>
              <p className="text-center">Let's work together.</p>
            </div>
            <div className="flex justify-center text-center pt-s600">
              <PrimaryButton
                to="/contact"
                background1="transparent"
                background2="bg-primary"
                outline2="outline-none"
                outline1="outline outline-1 outline-primary"
                textcolor1="text-primary"
                textcolor2="text-secondary"
                className="px-s600 py-s300"
              >
                TELL US
              </PrimaryButton>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-6 justify-center flex-1">
              <div className="flex flex-wrap gap-s600 justify-between">
                <PrimaryButton
                  href="mailto:info@awtogar.com"
                  background1="transparent"
                  background2="bg-primary"
                  outline2="outline-none"
                  outline1="outline outline-1 outline-primary"
                  textcolor1="text-primary"
                  textcolor2="text-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-s500 py-4 text-xs"
                >
                  info@awtogar.com
                </PrimaryButton>
                <PrimaryButton
                  href="tel:+13015499309"
                  background1="transparent"
                  background2="bg-primary"
                  outline2="outline-none"
                  outline1="outline outline-1 outline-primary"
                  textcolor1="text-primary"
                  textcolor2="text-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-s500 py-4 text-xs"
                >
                  +62 85156015818
                </PrimaryButton>
              </div>
              <div className="flex flex-wrap gap-s600 justify-between">
                <div className="flex flex-col gap-s100 text-xs">
                  <span className="text-primary-muted">Pages Menu</span>
                  <LinkItems href="#home-hero" scrollToSection={scrollToSection}>
                    Home
                  </LinkItems>
                  <LinkItems href="#home-services-works" scrollToSection={scrollToSection}>
                    Services
                  </LinkItems>
                  <LinkItems href="#home-selected-works" scrollToSection={scrollToSection}>
                    Selected Works
                  </LinkItems>
                  <LinkItems href="#home-contact" scrollToSection={scrollToSection}>
                    Contact
                  </LinkItems>
                </div>
                {/* Social Links */}
                <div className="flex flex-col gap-s100 text-xs">
                  <span className="text-primary-muted">Socials</span>
                  <LinkItems href="https://github.com/awtogar" rel="noopener noreferrer" target="_blank">
                    Github
                  </LinkItems>
                  <LinkItems href="https://www.linkedin.com/in/awaluddintogar" rel="noopener noreferrer" target="_blank">
                    LinkedIn
                  </LinkItems>
                  <LinkItems href="https://www.behance.net/awaluddintogar" rel="noopener noreferrer" target="_blank">
                    Behance
                  </LinkItems>
                  <LinkItems href="https://www.instagram.com/awtogarr" rel="noopener noreferrer" target="_blank">
                    Instagram
                  </LinkItems>
                </div>
              </div>
              <div className="flex text-xs justify-center items-center text-primary/85 pt-4 border-t border-primary-muted">
                <span className="transition-colors hover:text-primary">© {new Date().getFullYear()} Awtogar. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
