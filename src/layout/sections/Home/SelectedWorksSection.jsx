import React from 'react';
import { works } from '../../../data/data';
import { CreativeButton, HoverRotate } from '../../../components';
import { RiArrowRightUpLine, RiCalendarLine, RiCodeSSlashLine } from '@remixicon/react';
import { ScrollAnimatedImg } from '../../../components';

const SelectedWorksSection = () => {
  return (
    <section id="selected-works" className="relative py-s900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <header className="mb-s800">
          <div className="inline-flex items-center gap-3 mb-s300">
            <span className="text-xs font-medium tracking-[0.2em] text-primary/60 uppercase">(Selected)</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-s400">
            <div>
              <h2 className="text-h100 text-primary mb-s200 leading-none uppercase">Works</h2>
              <p className="text-primary/70 max-w-2xl">Explore a curated collection of my recent work, showcasing innovation and craftsmanship.</p>
            </div>
          </div>
        </header>

        {/* Works Grid */}
        <div className="grid gap-s900">
          {works.map((work, index) => (
            <article key={index} className="group relative">
              <div className="relative bg-primary/[0.02] rounded-2xl p-s400 md:p-s600 border border-primary/5 ">
                {/* Image Container */}
                <div className="relative mb-s500 overflow-hidden rounded-xl">
                  <ScrollAnimatedImg
                    src={work.image}
                    alt={work.title}
                    containerClassName="aspect-[16/10] md:aspect-[21/9]"
                    imageClassName="rounded-xl object-cover w-full h-full transition-transform duration-700 group-hover:scale-101"
                    scrollRange={['0%', '15%']}
                    offset={['start end', 'end start']}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                </div>

                {/* Content */}
                <div className="space-y-s400">
                  {/* Title & Date Row */}
                  <div className="flex md:flex-row justify-between md:items-start md:justify-between gap-s300">
                    <h3 className="text-h300 text-primary leading-tight">{work.title}</h3>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 self-start">
                      <RiCalendarLine size={14} className="text-primary/50" />
                      <time className="text-sm font-medium text-primary/70 whitespace-nowrap tabular-nums">
                        {work.date[0].month.slice(0, 3)} {work.date[0].year}
                      </time>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-primary/75 leading-relaxed max-w-3xl">{work.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-s200">
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

        {/* CTA Section */}
        <footer className="mt-s900 pt-s900 border-t border-primary/10">
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
        </footer>
      </div>
    </section>
  );
};

export default SelectedWorksSection;
