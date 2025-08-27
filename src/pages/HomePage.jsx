import { useRef } from 'react';
import { allTags,services } from '../data/data';
import useVideoInView from '../hooks/useVideoInView';
import video1 from '/src/assets/videos/video-1.mp4';
import video2 from '/src/assets/videos/video-2.mp4';

const HomePage = () => {
  const video1Loader = useVideoInView();
  const video2Loader = useVideoInView();

  return (
    <>
      <section className="z-10 bg-neutral-100 padding-section-x gap-8 pb-8 pt-[164px]">
        <div className="m-auto w-full">
          <div className="flex flex-col ">
            <div className="flex flex-col gap-2">
              <div className="text-[36px] leading-[116%] tracking-[2%] text-primary font-sans font-[400]">
                <h1>Graphic designer and web developer enthusiast</h1>
              </div>
              <div className="text-base text-primary/80 leading-[116%] tracking-[4%] font-sans font-normal mb-8">
                <p>I'm a multidisciplinary of the design and development — learning through by doing.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
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
      <section className="z-10 bg-neutral-100">
        <div className="m-auto w-full">
          <div className="h-[468px] overflow-hidden">
            <video ref={video1Loader} loop muted playsInline className="w-full h-full object-cover" preload="none">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="z-10 bg-neutral-100 padding-section-x-y">
        <div className="m-auto w-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-[24px] font-bold leading-[104%] tracking-[4%] mt-8">
                <h2>CRAFTING IMPACTFUL EXPERIENCES</h2>
              </div>
              <div className="h-[286px] overflow-hidden rounded-lg">
                <video ref={video2Loader} loop muted playsInline className="w-full h-full object-cover" preload="none">
                  <source src={video2} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-base text-primary-muted">
                <p>Turning the visions into reality based on the use case concepts and resulting meaningful brand stories behind.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((allTags, index) => (
                  <div key={index} className="border-brand-secondary border text-primary px-3 py-1 rounded-full text-sm">{allTags.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="z-10 bg-primary padding-section-x-y">
        <div className="m-auto w-full">
          {/* header */}
          <div className="flex w-full flex-col">
              <h2 className='text-brand-primary text-3xl'>HOW I CAN <br />HELP YOU/</h2>
            <div className="text-base text-brand-primary/80">
              <div className="flex flex-col">
                <span>(SERVICES)</span>
                <p>As a graphic designer and web developer, I can help you create stunning visuals and seamless user experiences.</p>
              </div>
            </div>
          </div>
          <div className="w-full pt-space-lg">
            <div className="mt-12 gap-y-16 flex flex-col justify-between text-brand-primary">
            {services.map((service, index) => {
              const topValue = `calc(20vh + ${index * 5.75}em)`;
              const marginBottomValue = `${17.25 - index * 5.75}em`;
              
              return (
                <div key={index} className='sticky top-0 border-t border-t-brand-primary/40 bg-primary' style={{top: topValue, marginBottom: marginBottomValue }}>
                  {/* card header */}
                  <div className='flex items-center justify-start text-left font-semibold text-brand-primary gap-2 '>
                    <span>({service.number})</span>
                    <h3 className='text-2xl'>{service.title}</h3>
                  </div>
                  <div className="">
                    <p>{service.description}</p>
                    <div className="">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className='flex items-center gap-2 mt-4'>
                          <span className='font-mono text-sm text-brand-secondary'>({feature.number})</span>
                          <span className='text-sm'>{feature.name}</span>
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
      </section>
    </>
  );
};

export default HomePage;
