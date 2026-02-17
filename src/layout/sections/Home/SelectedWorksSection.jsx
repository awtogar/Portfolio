import React from 'react';
import { works } from '../../../data/data';
import { CreativeButton, HoverRotate } from '../../../components';
import { RiArrowRightUpLine, RiCalendarLine, RiCodeSSlashLine } from '@remixicon/react';
import { ScrollAnimatedImg } from '../../../components';

const SelectedWorksSection = () => {
  return (
    <section id="selected-works" className="relative py-s900 overflow-hidden">
      <div className="relative">
        {/* Header */}
        <div className="flex w-full flex-col gap-s500 text-primary mb-s500">
          <div className="flex flex-col gap-2">
            <span className="hsAccent">(selected)</span>
            <h2 className="text-h200">WORKS</h2>
          </div>
          <p>Explore a curated collection of my recent work, showcasing innovation and craftsmanship.</p>
        </div>

        {/* Works Grid */}
        <div className="flex flex-col gap-s900 md:hidden">
          {works.map((work, index) => (
            <article key={index} className="group relative">
              <div className="relative bg-primary/[0.02] rounded-2xl p-s400 md:p-s600 border border-primary/5 ">
                {/* Image Container */}
                <div className="relative mb-s500 overflow-hidden rounded-xl">
                  <ScrollAnimatedImg
                    src={work.image}
                    alt={work.title}
                    containerClassName="aspect-[5/4]"
                    imageClassName="rounded-xl object-cover w-full h-full transition-transform duration-700 group-hover:scale-101"
                    scrollRange={['0%', '15%']}
                    offset={['start end', 'end start']}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                </div>
                <div className="space-y-s400">
                  {/* Title & Date Row */}
                  <div className="flex justify-between gap-s300">
                    <span className="text-base-lg">{work.title}</span>
                    <div className="flex items-center">
                      <time className=" text-primary/75 text-sm font-mono">
                        {work.date[0].month.slice(0, 3)}/{work.date[0].year}
                      </time>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-primary/75">{work.description}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-s200">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-s200 py-[2px] rounded-full text-base-sm font-medium bg-primary/5 text-primary/40 border border-primary/10 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-s600">
          {/* Left Column */}
          <div className="flex flex-col gap-s600">
            {works
              .filter((_, index) => index % 2 === 0)
              .map((work, index) => (
                <article key={index} className="group relative">
                  <div className="relative bg-primary/[0.02] rounded-2xl p-s500 border border-primary/5 hover:border-primary/10 transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative mb-s400 overflow-hidden rounded-xl">
                      <ScrollAnimatedImg
                        src={work.image}
                        alt={work.title}
                        containerClassName="aspect-[4/3]"
                        imageClassName="rounded-xl object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        scrollRange={['0%', '15%']}
                        offset={['start end', 'end start']}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="space-y-s300">
                      <div className="flex items-start justify-between gap-s300">
                        <h3 className="text-h300 text-primary leading-tight">{work.title}</h3>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 shrink-0">
                          <RiCalendarLine size={14} className="text-primary/50" />
                          <time className="text-sm font-medium text-primary/70 whitespace-nowrap tabular-nums">
                            {work.date[0].month.slice(0, 3)} {work.date[0].year}
                          </time>
                        </div>
                      </div>

                      <p className="text-base text-primary/75 leading-relaxed">{work.description}</p>

                      <div className="flex flex-wrap gap-2 pt-s100">
                        {work.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-primary/80 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
                          >
                            <span className="w-1 h-1 bg-primary/60 rounded-full" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {/* Right Column - Offset for Masonry Effect */}
          <div className="flex flex-col gap-s600 mt-s900">
            {works
              .filter((_, index) => index % 2 === 1)
              .map((work, index) => (
                <article key={index} className="group relative">
                  <div className="relative bg-primary/[0.02] rounded-2xl p-s500 border border-primary/5 hover:border-primary/10 transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative mb-s400 overflow-hidden rounded-xl">
                      <ScrollAnimatedImg
                        src={work.image}
                        alt={work.title}
                        containerClassName="aspect-[4/5]"
                        imageClassName="rounded-xl object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        scrollRange={['0%', '15%']}
                        offset={['start end', 'end start']}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="space-y-s300">
                      <div className="flex items-start justify-between gap-s300">
                        <h3 className="text-h300 text-primary leading-tight">{work.title}</h3>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 shrink-0">
                          <RiCalendarLine size={14} className="text-primary/50" />
                          <time className="text-sm font-medium text-primary/70 whitespace-nowrap tabular-nums">
                            {work.date[0].month.slice(0, 3)} {work.date[0].year}
                          </time>
                        </div>
                      </div>

                      <p className="text-base text-primary/75 leading-relaxed">{work.description}</p>

                      <div className="flex flex-wrap gap-2 pt-s100">
                        {work.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-primary/80 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
                          >
                            <span className="w-1 h-1 bg-primary/60 rounded-full" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <div className="mt-s900 pt-s900 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-s600">
            <div className="text-center md:text-left">
              <p className="text-lg text-primary/70 mb-2">Interested in seeing more?</p>
              <p className="text-sm text-primary/50">Explore my complete portfolio of projects and experiments</p>
            </div>

            <HoverRotate to="/projects" variant="outline" target="_blank" rel="noopener noreferrer" className="justify-center">
              <span className="text-primary/75">View All Projects</span>
              <span className="flex items-center justify-center gap-1 text-primary">
                <span>Let's go</span>
                <RiArrowRightUpLine className="pt-1.5" size={26} />
              </span>
            </HoverRotate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorksSection;
