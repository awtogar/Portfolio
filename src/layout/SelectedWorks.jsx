import React from 'react';
import { works } from '../data/data';
import { ScrollAnimatedImg } from '../components';

const SelectedWorks = () => {
  return (
    <div id="selected-works" className="flex flex-col space-300 pt-s900 pb-s900">
      <div className="flex w-full flex-col gap-s400">
        <h2 className="text-h100">
          SELECTED <br />
          WORKS
        </h2>
        <p className="text-brand-secondary/80 text-base-sm pt-s200">A showcase of my recent projects and collaborations.</p>
      </div>
      <div className="flex flex-col gap-s800">
        {works.map((work, index) => (
          <div key={index} className="space-300 pt-s600 pb-s200">
            <div className="flex flex-col gap-s300">
              <ScrollAnimatedImg image={work.image} alt={work.title} containerClassName="h-[348px] rounded-xl" scrollRange={['0%', '15%']} offset={['start end', 'end start']} />
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
  );
};

export default SelectedWorks;
