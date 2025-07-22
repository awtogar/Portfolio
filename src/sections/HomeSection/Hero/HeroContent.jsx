import React from "react";

const ContentFirst = ({ scrollYProgress }) => {
  return (
    // if this section have backgroun follow cursor content will in their back. so fixed it
    <div className="h-screen sticky top-0 bg-based flex flex-col items-center justify-center text-white pb-[5vh]">
      {/* CREATE HERO CONTENT HERE */}
      <div className="w-full h-screen pt-28 padding-section-x">
        <div className="m-auto w-full md:max-w-[480px] lg:max-w-[964px] xl:max-w-[1208px] flex flex-col">
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="text-main text-mh100">
              <div className="payload-richtext ">
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
                  I make visuals that hit and websites that just get it done —
                  clean, fast, and built with meaning. Helping brands talk
                  louder with fresh design and smooth user-friendly builds.
                </p>
              </div>
            </div>
          </div>
          {/* FIXME: Lanjut kasih spacing atau gap agar gak deket bgt sama paragraph */}
          <div className="flex w-full gap-6">
            <div className="flex w-full gap-4 pt-4 sm:w-auto sm:items-center sm:gap-6">
              {/* Primary Button - Get in touch (2/3 width) */}
              <a
                href="/get-in-touch"
                className="px-6 py-4 bg-primary text-surface rounded-full hover:bg-gray-800 transition-all duration-300  flex items-center justify-center flex-1"
              >
                Get in touch
              </a>

              <a
                href="/works"
                className="px-6 py-4 bg-surface text-main rounded-full hover:bg-accent-secondary hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0"
              >
                Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSecond = ({ scrollYProgress }) => {
  return (
    // if this section have backgroun follow cursor content will in their back. so fixed it
    <div className="relative h-screen bg-primary text-secondary">
      {/* CREATE HERO CONTENT HERE */}
      <div className="w-full items-center justify-center padding-section-x">
        <h1>Section 2 of container</h1>
      </div>
    </div>
  );
};

export { ContentFirst, ContentSecond };
