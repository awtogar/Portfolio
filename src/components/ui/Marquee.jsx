import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useLenis } from '../../context/LenisContext';
import { RiArrowRightUpLine } from '@remixicon/react';

/**
 * ScrollAwareArrow - Arrow that rotates based on scroll direction
 */
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
  const tweenRef = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(direction === 'left');
  const { lenis } = useLenis();

  // Setup GSAP animation
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeInner = marqueeRef.current.querySelector('.marquee_inner');
    const marqueeParts = marqueeRef.current.querySelectorAll('.marquee_part');

    // Clone marquee parts to create seamless loop
    marqueeParts.forEach(part => {
      const clone = part.cloneNode(true);
      marqueeInner.appendChild(clone);
    });

    // Determine initial direction
    const initialDirection = direction === 'left' ? 1 : -1;

    // Create infinite horizontal tween
    tweenRef.current = gsap
      .to('.marquee_part', {
        xPercent: -100 * initialDirection,
        repeat: -1,
        duration: speed,
        ease: 'linear',
      })
      .totalProgress(0.5);

    // Set initial position for inner container
    gsap.set('.marquee_inner', { xPercent: -50 });

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [speed, direction]);

  // Listen to Lenis scroll direction
  useEffect(() => {
    if (!lenis || !scrollAware) return;

    const handleScroll = ({ direction: scrollDirection }) => {
      // direction: 1 = scrolling down, -1 = scrolling up
      const scrollingDown = scrollDirection > 0;
      setIsScrollingDown(scrollingDown);

      // Update marquee direction based on scroll
      if (tweenRef.current) {
        gsap.to(tweenRef.current, {
          timeScale: scrollingDown ? 1 : -1,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis, scrollAware]);

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
