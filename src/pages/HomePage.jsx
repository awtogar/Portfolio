import { useRef } from 'react';
import { RiAddLine, RiSubtractLine, RiCornerDownRightLine } from '@remixicon/react';
import { services, works, footerMenu, socialLinks, contactInfo, pageNavigation } from '../data/data';
import video1 from '/src/assets/videos/video-1.mp4';
import CreativeButton from '../components/ui/CreativeButton';
import { useScrollToSection } from '../utils/scrollToSection';
import SectionNavLink from '../components/ui/SectionLinks';
import VideoLoader from '../function/VideoLoader';
import LinkOnHover from '../components/ui/HoverLink';

const HomePage = () => {
  const scrollToSection = useScrollToSection();

  const sections = pageNavigation.HomePage;

  return (
    <>
      <section id={sections[0].id} className="z-10 section-padding-hero">
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
            {/* Story + CTA */}
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
                {Array.from(new Set(services.flatMap(service => service.tags))).map((tag, index) => (
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

      <section id={sections[1].id} className="z-10 section-padding-xy bg-primary text-brand-secondary">
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
                {services.map((service, index) => {
                  const topValue = `calc(10vh + ${index * 5.75}em)`;
                  const marginBottomValue = `${17.25 - index * 5.75}em`;
                  return (
                    <div key={index} className="sticky top-0 border-t border-t-neutral-100/40 bg-primary pt-s300" style={{ top: topValue, marginBottom: marginBottomValue }}>
                      <div className="flex items-center justify-between">
                        <div className="text-h300 flex grid-cols-12 items-center justify-start gap-4 py-6 text-left font-semibold spy-5 ">
                          <span className="col-span-2 self-center text-nowrap">( {service.number} )</span>
                          <h3 className="capitalize">{service.title}</h3>
                        </div>
                        <div className="">
                          {/*TODO: When is sticked to the top it will show RiaddLine if not sticked show RiSubtractLine */}
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
          <div id={sections[2].id} className="flex flex-col space-300">
            <div className="flex w-full flex-col gap-s400">
              <h2 className="text-h100">
                SELECTED <br />
                WORKS
              </h2>
              <p className="text-brand-secondary/80 text-base-sm pt-s200">A showcase of my recent projects and collaborations.</p>
            </div>
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
      <section id={sections[3].id} className="z-10 section-padding-end">
        <div className="m-auto w-full flex flex-col h-screen">
          {/* parent */}
          <div className="flex flex-col gap-s100 justify-between items-center text-center flex-1">
            {/* first children - centered in the middle */}
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
            {/* second children - at the bottom where green mark is */}
            <div className="flex items-center pb-s600">
              <LinkOnHover href="mailto:info@awtogar.com" variant="outline" target="_blank" rel="noopener noreferrer">
                <span>have any question?</span>
                <span className="flex items-center gap-1">
                  <RiCornerDownRightLine size={16} />
                  <span>{contactInfo.email}</span>
                </span>
              </LinkOnHover>
            </div>
          </div>
          <div className="flex flex-col gap-s600 justify-between">
            <div className="flex justify-between">
              <SectionNavLink
                title="Pages Menu"
                links={footerMenu.HomePage.map(item => ({
                  ...item,
                  scrollable: true,
                }))}
                scrollToSection={scrollToSection}
              />

              <SectionNavLink
                title="Socials"
                links={socialLinks.map(link => ({
                  ...link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }))}
              />
            </div>
            <div className="flex justify-center items-center text-primary/85 pt-4 border-t border-primary-muted">
              <span className="transition-colors hover:text-primary">{contactInfo.copyright}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
