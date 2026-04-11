import React, { useRef } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import { useMarquee } from '@/hooks';


export const ScrollAwareArrow = ({ size = 48, className = '', Icon = RiArrowRightUpLine, isScrollingDown = true }) => {
  return (
    <div
      className={`w-[60px] h-[60px] mx-4 my-0 transition-all duration-500 ${className} ${
        isScrollingDown ? 'rotate-[90deg] opacity-70 scale-100' : 'rotate-[-90deg] opacity-100 scale-110 brightness-110'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.75, 0.82, 0.165, 1)',
      }}
    >
      <Icon size={size} />
    </div>
  );
};

/**
 * MarqueeItem - Individual item in the marquee with text and icon
 */
export const MarqueeItem = ({ text, icon: Icon = RiArrowRightUpLine, iconSize = 48, isScrollingDown = true }) => (
  <div className="flex items-center shrink-0 px-1 py-0">
    {text}
    <ScrollAwareArrow size={iconSize} Icon={Icon} isScrollingDown={isScrollingDown} />
  </div>
);

/**
 * Marquee - Infinite scrolling marquee component using GSAP
 *
 * @param {React.ReactNode} children - Content to display in the marquee
 * @param {number} speed - Animation duration in seconds (default: 5)
 * @param {boolean} scrollAware - Whether to reverse direction based on scroll (default: true)
 * @param {string} direction - Initial direction: 'left' or 'right' (default: 'left')
 * @param {string} className - Additional classes for the marquee container
 * @param {string} innerClassName - Additional classes for the inner wrapper
 */
const Marquee = ({ children, speed = 5, scrollAware = true, direction = 'left', className = '', innerClassName = '' }) => {
  const marqueeRef = useRef(null);
  const { isScrollingDown } = useMarquee(marqueeRef, { speed, direction, scrollAware });

  return (
    <div ref={marqueeRef} className={`marquee relative overflow-hidden ${className}`}>
      <div className={`marquee_inner flex w-fit flex-auto flex-row ${innerClassName}`}>
        <div className="marquee_part flex items-center shrink-0">
          {React.Children.map(children, child => {
            if (React.isValidElement(child) && child.type === MarqueeItem) {
              return React.cloneElement(child, { isScrollingDown });
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
