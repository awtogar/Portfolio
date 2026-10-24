"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ListItem from "./ListItem";

export default function ListLayout({ writings }) {
  const [activeWriting, setActiveWriting] = useState(null);
  const [previousWriting, setPreviousWriting] = useState(null);

  const activeWritingIndex = activeWriting
    ? writings.findIndex((writing) => writing.slug === activeWriting.slug)
    : -1;

  const activeWritingNumber =
    activeWritingIndex >= 0
      ? String(activeWritingIndex + 1).padStart(2, "0")
      : null;

  const handleWritingEnter = (writing) => {
    if (activeWriting?.slug === writing.slug) return;

    if (activeWriting?.thumbnail) {
      setPreviousWriting(activeWriting);
    }

    setActiveWriting(writing);
  };

  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
      <div className="lg:sticky lg:col-span-4 lg:top-[clamp(8rem,14vw,14rem)] lg:self-start">
        <h1 className="flex items-start gap-2 text-h100 font-[500] leading-[1.1]">
          Writings <sup className="mt-4 text-h500">({writings.length})</sup>
        </h1>

        <div className="mt-6 lg:mt-8 max-w-[36ch]">
          <p className="text-base-sm uppercase text-fg/60">About</p>
          <p className="mt-2 text-base leading-body text-fg/80">
            Here&apos;s where I share my thoughts, insights, and growth. New
            blog article monthly, released towards the end of every month.
          </p>
        </div>
        {/* container */}
        <div className="relative mt-12 hidden aspect-square w-full max-w-[280px] lg:block">
          <AnimatePresence>
            {activeWriting?.thumbnail && (
              <motion.div
                key="thumbnail"
                className="absolute inset-0 origin-center overflow-hidden bg-neutral-900"
                initial={{ opacity: 0, scale: 0.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.01 }}
                transition={{ duration: 0.5, ease: [0.64, 0, 0.78, 0] }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  {previousWriting?.thumbnail && (
                    <img
                      src={previousWriting.thumbnail}
                      alt={previousWriting.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  {activeWriting?.thumbnail && (
                    <motion.img
                      key={activeWriting.slug}
                      src={activeWriting.thumbnail}
                      alt={activeWriting.title}
                      className="absolute inset-0 z-10 h-full w-full object-cover"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.64, 0, 0.78, 0] }}
                    />
                  )}
                </div>

                <motion.div
                  className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-6 text-[3rem] font-medium leading-none text-bg"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.15,
                    ease: [0.64, 0, 0.78, 0],
                  }}
                >
                  <span>Nº</span>
                  <span className="self-end">{activeWritingNumber}</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="lg:mt-section lg:col-span-8 pb-[clamp(6rem,10vw,10rem)]">
        <div className="grid grid-cols-1 border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60 md:grid-cols-[9rem_1fr] md:gap-6">
          <span>Date</span>
          <span>Name</span>
        </div>

        {writings.length > 0 ? (
          <ul>
            {writings.map((writing) => (
              <li key={writing.slug} className="list-none">
                <ListItem
                  writing={writing}
                  onMouseEnter={() => handleWritingEnter(writing)}
                  onMouseLeave={() => setActiveWriting(null)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-8 text-base text-fg/60">
            No writings published yet.
          </p>
        )}
      </div>
    </div>
  );
}
