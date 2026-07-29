import React from 'react';
import { TextReveal } from '@/components';

const HeadLineLabel = ({
  label,
  headline,
  headlineSuffix,
  labelDelay,
  // labelDelay = 0.25,
  headlineDelay,
  // headlineDelay = 0.25,
  suffixDelay,
  // suffixDelay = 0.25,
  className = '',
  headlineLayout = 'flex items-end justify-between',
}) => {
  return (
    <div className={`flex flex-col mb-s200 ${className}`}>
      <div className="flex items-center justify-between">
        <TextReveal as="span" startDelay={labelDelay}>
          <span className="text-base leading-heading tracking-body font-[450] uppercase text-primary-muted">{label}</span>
        </TextReveal>
      </div>
      <div className={`${headlineLayout} w-full md:mb-s200 lg:mb-s600`}>
        <TextReveal as="h2" style={{ lineHeight: '1' }} className="text-h100 tracking-heading font-serif font-bold" startDelay={headlineDelay}>
          {headline}
        </TextReveal>
        {headlineSuffix && (
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" style={{ lineHeight: '1' }} className="text-h100 tracking-heading font-serif font-bold" startDelay={suffixDelay}>
              {headlineSuffix}
            </TextReveal>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadLineLabel;
