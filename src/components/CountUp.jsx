'use client';

import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from 'motion/react';
import { usePreloader } from '@/context';

const PLACES = [100, 10, 1];
const STRIPS = { 100: 2, 10: 11, 1: 101 };
const DIGITS = Object.fromEntries(PLACES.map(place => [place, Array.from({ length: STRIPS[place] }, (_, i) => i % 10)]));

const SlotDigit = ({ count, place, index }) => {
  const position = useTransform(count, n => Math.floor(n / place));
  const offset = useMotionValue(position.get());
  const y = useTransform(offset, v => `${-v}em`);
  const width = useTransform(count, n => (place === 100 && n < 100 ? '0em' : '0.62em'));

  useMotionValueEvent(position, 'change', value => {
    animate(offset, value, {
      duration: 0.32 + index * 0.04,
      ease: [0.22, 1, 0.36, 1],
    });
  });

  return (
    <motion.span style={{ width }} className="relative block h-[1em] overflow-hidden">
      <motion.span style={{ y }} className="absolute left-0 top-0 flex flex-col leading-none">
        {DIGITS[place].map((digit, digitIndex) => (
          <span className="block h-[1em] w-[0.62em] text-center" key={digitIndex}>
            {digit}
          </span>
        ))}
      </motion.span>
    </motion.span>
  );
};

export const CountUp = () => {
  const { progress } = usePreloader();
  const count = useTransform(progress, v => Math.min(Math.round(v), 100));

  return (
    <motion.div
      exit={{ y: '-100%', transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
      className="fixed inset-0 z-[9999] flex items-end justify-start bg-neutral-900 p-8 text-bg"
    >
      <span className="flex text-[15vw] font-medium leading-none tracking-tighter tabular-nums">
        {PLACES.map((place, index) => (
          <SlotDigit key={place} count={count} place={place} index={index} />
        ))}
        <span className="block">%</span>
      </span>
    </motion.div>
  );
};
