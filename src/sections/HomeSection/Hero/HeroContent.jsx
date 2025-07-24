/* eslint-disable no-unused-vars */
import React from "react";

const ContentFirst = ({ scrollYProgress }) => {
  return (
    <section className="h-[75svh] sticky top-0 bg-canvas">
      <div className="flex flex-col w-full pt-28 padding-section-x gap-8">
        <div className="m-auto w-full md:max-w-[480px] lg:max-w-[964px] xl:max-w-[1208px] flex flex-col gap-4">
          <div className="text-main text-mh100">
            <div className="payload-richtext">
              <h1>
                Graphics designer
                <br />
                and web developer enthusiast
              </h1>
            </div>
          </div>
          <div className="text-muted text-p100">
            <div className="payload-richtext">
              <p>
                Blending design and development to build fast, user-friendly
                websites with purpose and impactful visuals.
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="flex w-full gap-4 pt-4 sm:w-auto sm:items-center sm:gap-6">
          <a href="/get-in-touch" className="group relative px-6 py-4 bg-primary text-surface rounded-full hover:bg-muted-700 transition-all duration-300 flex items-center justify-center flex-1">Get in touch</a>
          <a href="/works" className="group relative px-6 py-4 bg-transparent text-black border border-black rounded-full hover:bg-canvas hover:text-main transition-all duration-300 flex items-center justify-center flex-shrink-0">Works</a>
        </div>
      </div>
    </section>
  );
};

const ContentSecond = ({ scrollYProgress }) => {
  return (
    <section className="relative h-[calc(200svh-75svh)] bg-primary">
      <div className="w-full flex flex-col items-center justify-center bg-canvas">
        <div className="h-screen mt-8 md:mt-16 w-full flex items-center justify-center overflow-hidden md:h-[768px] max-h-max">
          <video src="/src/assets/videos/intro.webm"
            autoPlay loop muted playsInline className="w-full h-full object-cover"/>
        </div>
        <div className="bg-canvas rounded-t-[2.5rem] md:rounded-t-[3.5rem] w-full h-[25svh] flex items-center justify-center -mt-8 md:mt-1 z-10 relative">
          <div className="flex flex-col">

            {/* WHAT I DO? */}
            <div className="text-p100">
              <div className="payload-richtext">
                <p>What I Do?</p>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col">
                <div className="payload-richtext">
                  <h2>Design</h2>
                </div>
                <div className="payload-richtext">
                  <h2>Design</h2>
                </div>
                <div className="payload-richtext">
                  <h2>Design</h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContentFirst, ContentSecond };