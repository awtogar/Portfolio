"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import WritingListItem from "./WritingListItem";

export default function WritingLayout({ writings }) {
  const [activeWriting, setActiveWriting] = useState(null);
  const activeWritingIndex = activeWriting
    ? writings.findIndex((writing) => writing.slug === activeWriting.slug)
    : -1;
  const activeWritingNumber =
    activeWritingIndex >= 0
      ? String(activeWritingIndex + 1).padStart(2, "0")
      : null;

  return (
    <>
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h1 className="flex items-start gap-2 text-display font-[500] leading-[1.1]">
          Blog <sup className="mt-4 text-h500">({writings.length})</sup>
        </h1>

        <div className="mt-16 max-w-[36ch]">
          <p className="text-base-sm uppercase text-fg/60">About</p>
          <p className="mt-4 text-base leading-body text-fg/80">
            Here&apos;s where I share my thoughts, insights, and growth. New
            blog article monthly, released towards the end of every month.
          </p>
        </div>

        <div className="relative mt-12 hidden aspect-square w-full max-w-[280px] items-center justify-center overflow-hidden bg-neutral-900 lg:flex">
          <AnimatePresence>
            {activeWriting?.thumbnail && (
              <motion.div
                key={activeWriting.slug}
                className="absolute inset-0 origin-center"
                initial={{ opacity: 0, scale: 0.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.01 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={activeWriting.thumbnail}
                  alt={activeWriting.title}
                  fill
                  sizes="280px"
                  className="object-cover"
                />

                <motion.div
                  className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-6 text-[3rem] font-medium leading-none text-bg"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
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

      <section className="lg:mt-section">
        <div className="grid grid-cols-1 border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60 md:grid-cols-[9rem_1fr] md:gap-6">
          <span>Date</span>
          <span>Name</span>
        </div>

        {writings.length > 0 ? (
          <ul>
            {writings.map((writing) => (
              <li key={writing.slug} className="list-none">
                <WritingListItem
                  writing={writing}
                  onMouseEnter={() => setActiveWriting(writing)}
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
      </section>
    </>
  );
}
