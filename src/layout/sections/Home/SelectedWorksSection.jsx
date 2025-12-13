import React from 'react';
import { works } from '../../../data/data';
import { ScrollAnimatedImg } from '../../../components';

const SelectedWorksSection = () => {
  return (
    <div id="selected-works" className="flex flex-col space-300 pt-s900 pb-s900">
      <div className="flex w-full flex-col gap-s400 text-primary">
        <div className="flex flex-col">
          <span className="text-primary/75">( WORKS )</span>
          <h2 className="text-h100">Selected Workds</h2>
        </div>
        <p className="text-primary/75 text-base-sm pt-s200">A showcase of my recent projects that i've been done.</p>
      </div>
      <div className="flex flex-col gap-s800">
        {works.map((work, index) => (
          <div key={index} className="space-300 pt-s600 pb-s200">
            <div className="flex flex-col gap-s300">
              <ScrollAnimatedImg src={work.image} alt={work.title} containerClassName="h-[348px] rounded-xl" imageClassName='rounded-xl' scrollRange={['0%', '15%']} offset={['start end', 'end start']} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-primary">
                  <h3 className="text-h300">{work.title}</h3>
                  <div className="pt-s200 text-base-sm">
                    <span>
                      {work.date.month} - {work.date.year}
                    </span>
                  </div>
                </div>
                <div className="text-primary/75 flex flex-col">
                  <p>{work.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className="flex items-center gap-2 text-sm text-primary/75">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedWorksSection;
