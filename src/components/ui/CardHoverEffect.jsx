import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Index = ({ items, itemClasses, wrapperClasses }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [bgBounds, setBgBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  // Use effect to sync bounds updates with state changes (prevents double render)
  useEffect(() => {
    if (hoveredIdx === null) {
      // Keep the current bounds, just fade out
      return;
    }

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

  const handleMouseEnter = idx => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };

  return (
    <div ref={gridRef} className={cn('relative grid md:grid-cols-3', itemClasses)}>
      <motion.span
        className={cn('absolute z-0 block rounded-xl bg-brand-tertiary dark:bg-stone-800', wrapperClasses)}
        animate={{
          left: bgBounds.left,
          top: bgBounds.top,
          width: bgBounds.width,
          height: bgBounds.height,
          opacity: hoveredIdx !== null ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: 'easeInOut',
        }}
        initial={{ opacity: 0 }}
      />

      {/* Cards */}
      {items.map(({ description, title }, idx) => (
        <div
          key={idx}
          ref={el => (cardRefs.current[idx] = el)}
          className={cn('relative flex flex-col gap-3 p-4 z-[1]', itemClasses)}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="space-y-3">
            <h1 className="font-medium">{title}</h1>
            <p className="text-neutral-900 dark:text-neutral-400">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;

// finish
