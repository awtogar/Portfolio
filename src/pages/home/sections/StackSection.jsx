import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BaseSection } from '@/components';
import { LetterScroll } from '@/components/ui/LetterScroll';
import ReactLogo from '@/assets/images/react.svg?react';
import NextLogo from '@/assets/images/next-js.svg?react';
import JsLogo from '@/assets/images/javascript.svg?react';
import TailwindLogo from '@/assets/images/tailwind.svg?react';
import GsapLogo from '@/assets/images/gsap.svg?react';
import MotionLogo from '@/assets/images/motion.svg?react';
import VercelLogo from '@/assets/images/vercel.svg?react';
import NodeLogo from '@/assets/images/node-js.svg?react';
import FigmaLogo from '@/assets/images/figma.svg?react';
import PhotoshopLogo from '@/assets/images/photoshop.svg?react';

export const CardHoverEffect = ({ items, className }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [bgBounds, setBgBounds] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (hoveredIdx === null) return;
    const card = cardRefs.current[hoveredIdx];
    const grid = gridRef.current;
    if (!card || !grid) return;
    const gridRect = grid.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    setBgBounds({
      left: cardRect.left - gridRect.left,
      top: cardRect.top - gridRect.top,
      width: cardRect.width,
      height: cardRect.height,
    });
  }, [hoveredIdx]);

  const handleMouseEnter = idx => setHoveredIdx(idx);
  const handleMouseLeave = () => setHoveredIdx(null);

  return (
    <div
      ref={gridRef}
      data-cursor
      data-cursor-fill="none"
      className={cn('relative grid border-neutral-300 border-l border-t lg:border-none', 'grid-cols-2 md:grid-cols-12 lg:grid-cols-[repeat(21,minmax(0,1fr))]', className)}
    >
      <motion.span
        className="hidden md:block absolute z-0 bg-primary"
        animate={{
          left: bgBounds.left,
          top: bgBounds.top,
          width: bgBounds.width,
          height: bgBounds.height,
          opacity: hoveredIdx !== null ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
      />

      {items.map(({ Logo, label, link, title }, idx) => {
        //
        const isBig = idx < 3;
        const isMidRow = idx < 6;

        return (
          <motion.a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            ref={el => (cardRefs.current[idx] = el)}
            className={cn(
              'relative z-[1] flex flex-col items-center justify-center gap-2 p-4',
              'border-r border-b lg:border-r-0 lg:not-first-of-type:border-l lg:last-of-type:border-l lg:nth-of-type-[4]:border-l-0 border-neutral-300',
              'cursor-pointer group',
              'col-span-1 h-[clamp(110px,30vw,160px)]',
              isMidRow ? 'md:col-span-4' : 'md:col-span-3',
              'md:h-[clamp(130px,18vw,200px)]',
              isBig ? ' lg:border-b lg:col-span-7 lg:h-[clamp(220px,22vw,320px)]' : 'lg:col-span-3 lg:h-[clamp(100px,12vw,160px)]'
            )}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            aria-label={label}
          >
            <Logo
              title={title}
              data-cursor
              data-cursor-fill="none"
              data-cursor-sticky
              data-cursor-magnetic
              className={cn(
                'relative z-10 transition-colors duration-300',
                'h-10 w-auto max-w-16 fill-current text-primary dark:text-neutral-400 md:group-hover:text-secondary',
                isBig ? 'lg:h-16 lg:max-w-28' : 'lg:h-10 lg:max-w-16'
              )}
            />
          </motion.a>
        );
      })}
    </div>
  );
};

const items = [
  { Logo: ReactLogo, label: 'Visit React Website', link: 'https://react.dev/', title: 'React' },
  { Logo: NextLogo, label: 'Visit Next.js Website', link: 'https://nextjs.org/', title: 'Next.js' },
  { Logo: JsLogo, label: 'Visit Javascript Website', link: 'https://www.javascript.com/', title: 'Javascript' },
  { Logo: TailwindLogo, label: 'Visit Tailwind Website', link: 'https://tailwindcss.com/', title: 'Tailwind' },
  { Logo: GsapLogo, label: 'Visit GSAP Website', link: 'https://gsap.com/', title: 'GSAP' },
  { Logo: MotionLogo, label: 'Visit Motion Website', link: 'https://motion.dev/', title: 'Motion' },
  { Logo: VercelLogo, label: 'Visit Vercel Website', link: 'https://vercel.com/', title: 'Vercel' },
  { Logo: NodeLogo, label: 'Visit Node Js Website', link: 'https://nodejs.org/', title: 'Node Js' },
  { Logo: FigmaLogo, label: 'Visit Figma Website', link: 'https://www.figma.com/', title: 'Figma' },
  { Logo: PhotoshopLogo, label: 'Visit Adobe Website', link: 'https://www.adobe.com/', title: 'Photoshop' },
];

const StatSection = () => (
  <BaseSection containerID="tech-stack" sectionClassName="">
    <div className="flex flex-col md:gap-y-2 lg:gap-y-6">
      <div className="relative block">
        <LetterScroll elementHeight="h-[30dvh] md:h-[50dvh]" lines={['MODERN', 'TECH STACK']} textColor="text-primary" />
      </div>
      <div className="relative blocks">
        <CardHoverEffect items={items} />
      </div>
    </div>
  </BaseSection>
);

export default StatSection;
