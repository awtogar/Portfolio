import React from "react";

const SectionFirst = (scrollYProgress) => {
  return (
    // if this section have backgroun follow cursor content will in their back. so fixed it
    <div className="h-screen sticky top-0 bg-shade-100 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[5vh] ">
      {/* CREATE HERO CONTENT HERE */}
      <div className="w-full padding-section-x">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="text-shade-800 text-[4rem] leading-[0.02em]">
              <div className="payload-richtext ">
                <h1>
                  Graphics designer
                  <br />
                  and web developer enthusiast
                </h1>
              </div>
            </div>
            <div className="font-[300]">
              <div className="payload-richtext">
                <p>
                  I make visuals that hit and websites that just get it done —
                  clean, fast, and built with meaning. Helping brands talk
                  louder with fresh design and smooth user-friendly builds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionSecond = (scrollYProgress) => {
  return (
    // if this section have backgroun follow cursor content will in their back. so fixed it
    <div className="relative h-screen bg-shade-800 text-shade-100">
      {/* CREATE HERO CONTENT HERE */}
      <div className="w-full items-center justify-center padding-section-x">
        <h1>Section 2 of container</h1>
      </div>
    </div>
  );
};

export { SectionFirst, SectionSecond };
