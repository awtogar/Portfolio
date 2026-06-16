import { BaseSection } from '@/components';
import { placeholder } from '@/assets';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
      className={cn('relative grid border-l border-t border-neutral-300 dark:border-neutral-700', 'grid-cols-2 md:grid-cols-12 lg:grid-cols-[repeat(21,minmax(0,1fr))]', className)}
    >
      {/* Hover morphing background */}
      <motion.span
        className="hidden md:block absolute z-0 bg-brand-tertiary dark:bg-stone-800"
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

      {items.map(({ logo, label, link, title }, idx) => {
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
              'border-r border-b border-neutral-300 dark:border-neutral-700',
              'cursor-pointer group',

              // Default on Mobile: 2-col, 5 rows, uniform height
              'col-span-1 h-[clamp(110px,30vw,160px)]',

              // Tablet: 12-col grid — first 6 → 3 per row, last 4 → 4 per row
              isMidRow ? 'md:col-span-4' : 'md:col-span-3',
              'md:h-[clamp(130px,18vw,200px)]',

              // Desktop: 21-col grid — big 3 tall, small 7 short
              isBig ? 'lg:col-span-7 lg:h-[clamp(220px,22vw,320px)]' : 'lg:col-span-3 lg:h-[clamp(100px,12vw,160px)]'
            )}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            aria-label={label}
          >
            <img
              src={logo}
              alt={title}
              loading="lazy"
              className={cn('relative z-10 transition-all duration-300 object-contain', 'w-10 h-10', isBig ? 'lg:w-16 lg:h-16' : 'lg:w-10 lg:h-10')}
            />
          </motion.a>
        );
      })}
    </div>
  );
};

const items = [
  { logo: placeholder, label: 'Visit React Website', link: 'https://react.dev/', title: 'React' },
  { logo: placeholder, label: 'Visit Next.js Website', link: 'https://nextjs.org/', title: 'Next.js' },
  { logo: placeholder, label: 'Visit TypeScript Website', link: 'https://www.typescriptlang.org/', title: 'Javascript' },
  { logo: placeholder, label: 'Visit GSAP Website', link: 'https://gsap.com/', title: 'GSAP' },
  { logo: placeholder, label: 'Visit Motion Website', link: 'https://motion.dev/', title: 'Motion' },
  { logo: placeholder, label: 'Visit Tailwind Website', link: 'https://tailwindcss.com/', title: 'Tailwind' },
  { logo: placeholder, label: 'Visit Vercel Website', link: 'https://vercel.com/', title: 'Vercel' },
  { logo: placeholder, label: 'Visit Figma Website', link: 'https://www.figma.com/', title: 'Figma' },
  { logo: placeholder, label: 'Visit Adobe Website', link: 'https://www.adobe.com/', title: 'Photoshop' },
  { logo: placeholder, label: 'Visit Adobe Website', link: 'https://www.adobe.com/', title: 'Illustrator' },
];

const StatSection = () => (
  <BaseSection containerID="stats">
    <div className="bg-stone-100 dark:bg-stone-900">
      <CardHoverEffect items={items} />
    </div>
  </BaseSection>
);

export default StatSection;
