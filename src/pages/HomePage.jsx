import { useRef } from 'react';
import useVideoInView from '../hooks/useVideoInView';
import video1 from '/src/assets/videos/video-1.mp4';
import video2 from '/src/assets/videos/video-2.mp4';

const HomePage = () => {
  const video1Load = useVideoInView();
  const video2Load = useVideoInView();

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
        <div className="h-[468px] overflow-hidden">
          <video 
            ref={video1Load} 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover" 
            preload="none"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="z-10 bg-neutral-100 padding-section-x-y">
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          <div className="h-[286px] overflow-hidden rounded-lg">
            <video 
              ref={video2Load} 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
              preload="none"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[24px] font-bold leading-[104%] tracking-[4%]">
              <h2>CRAFTING IMPACTFUL EXPERIENCES</h2>
            </div>
            <div className="text-base text-primary-muted">
              <p>Turning the visions into reality based on the use case concepts and resulting meaningful brand stories behind.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
