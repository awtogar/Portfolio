import { useRef } from 'react';
import { services, works } from '../data/data';
import useVideoInView from '../hooks/useVideoInView';
import video1 from '/src/assets/videos/video-1.mp4';
import video2 from '/src/assets/videos/video-2.mp4';
import PrimaryButton from '../components/ui/CreativeButton/PrimaryButton';

const HomePage = () => {
  const video1Loader = useVideoInView();
  const video2Loader = useVideoInView();

  return (
    <>
      {/* Hero Section */}
      <section className="z-10 section-padding-hero">
        <div className="m-auto w-full lg:max-w-[1408px]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-s600">
              <h1 className="text-display">Graphics and web designer enthusiast</h1>
              <p>I'm a person with a multidisciplinary background in design and development — learning through doing.</p>
            </div>
            <div className="flex items-center gap-s600 pt-s600">
              <div className="flex-1">
                <PrimaryButton href="/contact" className="w-full px-s600 py-s300 font-light text-center">
                  Get in touch
                </PrimaryButton>
              </div>
              <div className="flex-shrink-0">
                <PrimaryButton
                  href="/work"
                  className="px-s600 py-s300 font-light whitespace-nowrap"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'text-primary',
                    border: '1px solid var(--color-primary)',
                  }}
                >
                  Works
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
              <h2 className="text-h100">
                BE <span className="text-brand-primary">IMPACTFUL</span>
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
      <section className="z-10 section-padding-xy bg-primary text-brand-secondary rounded-3xl">
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
                      {/* Service Header */}
                      <div className="flex items-center text-left font-semibold gap-s200 text-h200">
                        <span className="py-s100 font-mono">({service.number})</span>
                        <h3 className="capitalize">{service.title}</h3>
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
          <div className="flex flex-col space-300">
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
      <section className="z-10 section-padding-xy">
        <div className="m-auto w-full">
          <div className="flex flex-col">
            <div className="flex flex-col gap-s300">
              <h2 className="text-h100 text-center italic">
                Have an idea <br /> in mind?
              </h2>
              <p className="text-center">Let's work together.</p>
            </div>
            <div className="flex justify-center text-center pt-s600">
              <PrimaryButton href="/contact" className="px-s600 py-s300 font-light">
                Get in touch
              </PrimaryButton>
            </div>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
