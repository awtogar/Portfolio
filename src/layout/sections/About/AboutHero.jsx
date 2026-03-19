import React from 'react';
import { RiGeminiFill, RiHand } from '@remixicon/react';
import BaseSection from '../BaseSection';
import { ScrollAnimatedImg, CircularText, CreativeButton } from '../../../components';
import images_1 from '../../../assets/images/about/about-1.jpg';
import { useCursorHover } from '../../../hooks/useCursorHover';

/*
  ─── ABOUT HERO ─────────────────────────────────────────────────────────────
  Snellenberg pattern:
  - Full-width image first — cinematic, no padding, tall proportions
  - CircularText badge floats over the right edge of the image (unchanged)
  - Introduce block below: greeting line (small, muted) → h1 → body
  - h1 uses text-h200 (not h100) — this is a subpage, not the homepage hero
  - Body copy narrowed to ~42ch, muted opacity
  - Single CTA button — his about pages don't over-CTA
  - Gap between image and text block uses s700/s800 — generous but not as
    tall as a full section gap (that would push the text off-screen)
*/
const AboutHero = () => {
  const resumeRef = useCursorHover('arrow');

  return (
    <BaseSection sectionClassName="section-padding-hero">
      <div className="flex flex-col gap-s700 lg:gap-s800">
        {/* ── Full-width image + floating badge ── */}
        <div className="relative">
          <ScrollAnimatedImg
            src={images_1}
            scrollRange={['0%', '15%']}
            alt="About — portrait"
            containerClassName="w-full h-[428px] md:h-[682px] lg:h-[912px] rounded-2xl overflow-hidden"
            imageClassName="object-cover object-center w-full h-full"
          />
          {/* Circular badge — right edge, vertically centred */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden">
            <CircularText
              text="MADE*NOT*BORN*"
              onHover="slowDown"
              className="text-secondary dark:text-primary"
              centerClassName="bg-neutral-100"
              centerIcon={<RiGeminiFill className="text-secondary dark:text-primary" size={48} />}
            />
          </div>
        </div>

        {/* ── Introduce block ── */}
        <div className="flex flex-col gap-s600 max-w-3xl">
          {/* Greeting */}
          <p className="flex items-center gap-s200 text-base text-primary/55">
            Hey! It's me Togar,
            <RiHand size={20} />
          </p>

          {/* Heading + body */}
          <div className="flex flex-col gap-s400">
            <h1 className="text-h200 leading-heading tracking-heading">
              A Creative Developer &amp; Website Designer
            </h1>
            <p className="text-base max-w-[42ch] text-primary/55 leading-body">
              I help global brands bring their ideas to life with impactful solutions and keep their brand identity.
            </p>
          </div>

          {/* CTA */}
          <div className="w-full max-w-[200px]">
            <CreativeButton ref={resumeRef} to="/contact" variant="outline">
              See my resume
            </CreativeButton>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutHero;
