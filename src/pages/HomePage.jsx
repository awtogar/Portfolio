import { useRef } from 'react';
import { services, works } from '../data/data';
import useVideoInView from '../hooks/useVideoInView';
import video1 from '/src/assets/videos/video-1.mp4';
import video2 from '/src/assets/videos/video-2.mp4';

const HomePage = () => {
  const video1Loader = useVideoInView();
  const video2Loader = useVideoInView();

  return (
    <>
      <section className="z-10 section-padding">
        <div className="m-auto w-full">
          <div className="flex flex-col gap-2 pb-8 pt-[164px]">
            <div className="flex flex-col">
              <div className="sh100-alt space-100">
                <h1>A graphics and web designer enthusiast</h1>
              </div>
              <div className="text-primary/90 tracking-[4%] font-sans font-normal">
                <p>I'm a person with a multidisciplinary background in design and development — learning through doing.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1">
                <a href="/contact" className="block w-full px-6 py-3 bg-primary text-neutral-100 rounded-full text-center">
                  Get in touch
                </a>
              </div>
              <div className="flex-shrink-0">
                <a href="/work" className="inline-block px-6 py-3 text-primary border border-primary rounded-full whitespace-nowrap">
                  Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="z-10 section-padding-xy">
        <div className="m-auto w-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="sh200">
                <h2>
                  BE <span className="text-brand-primary">IMPACTFULL</span>
                </h2>
              </div>
              <div className="h-[286px] overflow-hidden rounded-lg">
                <video ref={video2Loader} loop muted playsInline className="w-full h-full object-cover" preload="none">
                  <source src={video2} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-primary/90 tracking-[4%] font-sans font-normal">
                <p>
                  Turning the visions into reality based on <span className="text-brand-tertiary">the use case</span> and concepts resulting brand stories.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
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
      <section className="z-10 section-padding-xy bg-primary text-brand-secondary">
        <div className="m-auto w-full">
          {/* header */}
          <div className="flex w-full flex-col">
            <h2 className="space-200 sh100">
              HOW CAN I <br />
              HELP YOU?/
            </h2>
            <div className="text-brand-secondary/80">
              <div className="flex flex-col">
                <div className="text-base-sm tracking-[4%]">
                  <span>(SERVICES)</span>
                </div>
                <p className="tracking-[4%] font-sans font-normal">
                  As a graphic designer and web developer, I can help you create stunning visuals and seamless user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full m-auto">
            <div className="mt-12 gap-y-16 flex flex-col justify-between">
              {services.map((service, index) => {
                const topValue = `calc(10vh + ${index * 5.75}em)`;
                const marginBottomValue = `${17.25 - index * 5.75}em`;
                return (
                  <div key={index} className="sticky top-0 border-t border-t-neutral-100/40 bg-primary pt-2" style={{ top: topValue, marginBottom: marginBottomValue }}>
                    {/* card header */}
                    <div className="sh300 flex items-center justify-start text-left font-semibold gap-2">
                      <span className="space-200">({service.number})</span>
                      <h3>{service.title}</h3>
                    </div>
                    <div className="text-brand-secondary/80 tracking-[4%] leading-[116%] pt-4">
                      <p>{service.description}</p>
                      <div className="flex flex-col pt-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center mt-2 gap-2">
                            <span className="font-mono">({feature.number})</span>
                            <span className="tracking-[4%] leading-[116%]">{feature.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full flex-col">
            <h2 className="sh100">
              SELECTED <br />
              WORKS/
            </h2>
            <p className="text-brand-secondary/80 tracking-[4%] leading-[116%] pt-2">A showcase of my recent projects and collaborations.</p>
          </div>
          <div className="flex flex-col">
            {works.map((work, index) => (
              <div key={index} className="space-300">
                <div className="flex flex-col gap-2">
                  <div className="h-[368px] overflow-hidden rounded-lg pt-6 pb-2">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="sh300 flex items-center justify-between">
                    <h3>{work.title}</h3>
                    <div className="pt-2 text-sm tracking-[4%]">
                      <span>
                        {work.date.month} - {work.date.year}
                      </span>
                    </div>
                  </div>
                  <div className="text-brand-secondary/80 tracking-[4%] leading-[116%]">
                    <p className="text-brand-secondary/80">{work.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
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
      </section>
    </>
  );
};

export default HomePage;
