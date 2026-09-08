'use client';

import { TextReveal } from '@/components';
import { cursorPresets } from '@/cursor';

const HamburgerButton = ({ isActive, onToggle }) => {
  return (
    <div onClick={onToggle}>
      <TextReveal as="div" mode="epoch" startDelay={0.35}>
        <div
          {...cursorPresets.nav}
          className={`relative flex flex-col justify-center items-center h-[60px] w-[60px] gap-[0.3rem] md:gap-2 md:pointer-events-none cursor-pointer  ${isActive ? 'active' : ''}`}
        >
          <div
            className={`block w-12 h-[3px] bg-white mix-blend-difference transition-transform duration-300 ease-in-out origin-center
        ${isActive ? 'scale-x-50' : 'scale-x-60'} md:w-[30px] md:h-[2px]
        ${isActive ? 'md:scale-x-100' : 'md:scale-x-60'}`}
          />
          <div
            className={`block w-12 h-[3px] bg-white mix-blend-difference transition-transform duration-300 ease-in-out origin-center
        ${isActive ? 'scale-x-50' : 'scale-x-60'} md:w-[30px] md:h-[2px]
        ${isActive ? 'md:scale-x-100' : 'md:scale-x-60'}`}
          />
        </div>
      </TextReveal>
    </div>
  );
};

export default HamburgerButton;
