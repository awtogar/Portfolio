import { useRef } from 'react';
import { RiAddLine, RiSubtractLine, RiCornerDownRightLine } from '@remixicon/react';
import { ido, social_links, contact_info, pages_data } from '../data/data';
import video1 from '../assets/videos/video-1.mp4';
import { CreativeButton, HoverRotate, Footer } from '../components';
import VideoLoader from '../function/VideoLoader';
import SelectedWorks from '../layout/SelectedWorks';

const HomePage = () => {
  return (
    <>
      <section id="hero" className="z-10 section-padding-hero">
        <div className="m-auto w-full lg:max-w-[1408px]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-s600">
              <h1 className="text-display">Graphics and web designer enthusiast</h1>
              <p>I'm a person with a multidisciplinary background in design and development — learning through doing.</p>
            </div>
            <div className="flex items-center gap-s400 pt-s600">
              <div className="flex-1">
                <CreativeButton to="/contact" variant={'fill'}>
                  Get in touch
                </CreativeButton>
              </div>
              <div className="flex-shrink-0">
                <CreativeButton href="https://www.linkedin.com/in/awaluddintogar/" variant="outline" target="_blank" rel="noopener noreferrer">
                  My resume
                </CreativeButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="z-10">
        <div className="m-auto w-full">
          <div className="h-[468px] overflow-hidden">
            <VideoLoader src={video1} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="z-10 section-padding-xy">
        <div className="m-auto w-full lg:max-w-[1408px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-6 max-w-[640px]">
              <p className="text-h500 leading-relaxed text-primary">
                With over 2 years of experience and 100+ global clients, I specialize in creating impactful visual identities and digital experiences. Now, I extend my expertise to
                web design & development, crafting solutions that blend creativity and functionality.
              </p>

              <CreativeButton href="https://www.instagram.com/nostratic.archv" variant={'outline'} target="_blank" rel="noopener noreferrer">
                My design works
              </CreativeButton>

              {/* Tags */}
              <div className="flex flex-wrap gap-s200 pt-s400">
                {Array.from(new Set(ido.flatMap(service => service.tags))).map((tag, index) => (
                  <div key={index} className="tags">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-s600 bg-neutral-300 rounded-xl p-s600 shadow-sm">
              <div className="grid grid-cols-2 gap-s600">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-3xl font-semibold text-primary">100+</span>
                  <span className="text-primary/60">Clients Worlwide</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-3xl font-semibold text-primary">2+</span>
                  <span className="text-primary/60">years experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-i-do" className="z-10 section-padding-xy bg-primary text-brand-secondary">
        <div className="m-auto w-full">
          {/* Services Header */}
          <div className="flex flex-col rounded-t-lg">
            <div className="flex w-full flex-col gap-s400">
              <h2 className="text-h100">
                WHAT <br />I DO ?
              </h2>
              <div className="text-brand-secondary/80">
                <div className="flex flex-col gap-s200">
                  <div>
                    <span>(SERVICES)</span>
                  </div>
                  <p>I can help you create stunning visuals, seamless user experiences and be impactful based on your needs.</p>
                </div>
              </div>
            </div>
            {/* Services List */}
            <div className="w-full m-auto">
              <div className="mt-s900 gap-y-s800 flex flex-col justify-between">
                {ido.map((service, i) => {
                  const topValue = `calc(10vh + ${i * 5.75}em)`;
                  const marginBottomValue = `${17.25 - i * 5.75}em`;
                  return (
                    <div key={i} className="sticky top-0 border-t border-t-neutral-100/40 bg-primary pt-s300" style={{ top: topValue, marginBottom: marginBottomValue }}>
                      <div className="flex items-center justify-between">
                        <div className="text-h300 flex grid-cols-12 items-center justify-start gap-4 py-6 text-left font-semibold spy-5 ">
                          <span className="col-span-2 self-center text-nowrap">( {service.number} )</span>
                          <h3 className="capitalize">{service.title}</h3>
                        </div>
                        <div className="">
                          <RiAddLine />
                          {/* <RiSubtractLine/> */}
                        </div>
                      </div>
                      <div className="text-brand-secondary/80 pt-s400">
                        <p>{service.description}</p>
                        <div className="flex flex-col pt-s200">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center mt-s200 gap-s200">
                              <span className="">({feature.number})</span>
                              <span className="">{feature.name}</span>
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
          <SelectedWorks />
        </div>
      </section>
      <section id="contact" className="z-10 section-padding-end">
        <div className="m-auto w-full flex flex-col h-screen">
          <div className="flex flex-col gap-s100 justify-between items-center text-center flex-1">
            <div className="flex-1 flex items-center">
              <div className="flex flex-col">
                <div className="flex flex-col pb-s600">
                  <h2 className="text-3xl text-center italic">
                    <span className="text-5xl">Have</span> an idea
                    <br />
                    in <span className="text-5xl leading-snug">Mind?.</span>
                  </h2>
                  <p className="text-center">Let's work together.</p>
                </div>
                <CreativeButton to="/contact" variant="outline">
                  TELL US
                </CreativeButton>
              </div>
            </div>
            <div className="flex flex-col pb-s600 w-full">
              <HoverRotate href="mailto:info@awtogar.com" variant="outline" target="_blank" rel="noopener noreferrer" className="justify-center">
                <span className="text-primary-muted">Have any questions?</span>
                <span className="flex items-center text-primary font-semibold">
                  <RiCornerDownRightLine size={24} />
                  <span>{contact_info.email}</span>
                </span>
              </HoverRotate>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
