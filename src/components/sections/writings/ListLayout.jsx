"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, animate, useMotionValue } from "motion/react";
import ListItem from "./ListItem";
import { useCursorTarget } from "@/cursor";

const ease = [0.16, 1, 0.3, 1];
const easeInOut = [0.76, 0, 0.24, 1];

const layer = {
  hidden: { scale: 0.01 },
  show: { scale: 1, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, transition: { delay: 0.45, duration: 0 } },
};

const corners = {
  1: "items-end justify-start",
  2: "items-start justify-start",
  3: "items-start justify-end",
  0: "items-end justify-end",
};

export default function ListLayout({ writings }) {
  const [activeThumbnail, setActiveThumbnail] = useState(null);

  const cursorTarget = useCursorTarget();
  const groupScale = useMotionValue(1);

  const isActive = Boolean(activeThumbnail?.thumbnail);

  const activeThumbnailIndex = activeThumbnail
    ? writings.findIndex((writing) => writing.slug === activeThumbnail.slug)
    : -1;

  const cornerClass = corners[(activeThumbnailIndex + 1) % 4];

  const activeThumbnailNumber =
    activeThumbnailIndex >= 0
      ? String(activeThumbnailIndex + 1).padStart(2, "0")
      : null;

  useEffect(() => {
    const controls = isActive
      ? animate(groupScale, 1, { duration: 0.5, ease })
      : animate(groupScale, 0.01, {
          duration: 0.5,
          ease: easeInOut,
          onComplete: () => groupScale.set(1),
        });
    return () => controls.stop();
  }, [isActive, groupScale]);

  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
      <div className="lg:sticky lg:col-span-4 lg:top-[clamp(8rem,14vw,14rem)] lg:self-start">
        <h1 className="flex items-start gap-2 text-h100 font-[500] leading-[1.1]">
          Writings <sup className="mt-4 text-h500">({writings.length})</sup>
        </h1>

        <div className="mt-6 lg:mt-8 ">
          <p className="border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60">
            About
          </p>
          <p className="mt-2 text-base md:text-400 leading-body text-fg/80 md:max-w-[36ch] lg:max-w-[42ch]">
            Here&apos;s where I share my thoughts, insights, and growth. New
            blog article monthly, released towards the end of every month.
          </p>
        </div>

        <div className="relative mt-12 hidden aspect-square w-full md:max-w-[286px] lg:max-w-[368px] xl:max-w-[472px] lg:block">
          <motion.div
            style={{ scale: groupScale }}
            className="absolute inset-0 origin-center"
          >
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key={activeThumbnail.slug}
                  variants={layer}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute inset-0 origin-center overflow-hidden bg-neutral-900"
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 1.12, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.04, ease }}
                  >
                    <img
                      src={activeThumbnail.thumbnail}
                      alt={activeThumbnail.title || "Writing thumbnail"}
                      className="aspect-[4/3] w-[80%] object-cover"
                    />
                  </motion.div>

                  <div
                    className={`pointer-events-none absolute inset-0 flex p-6 text-[3rem] font-medium leading-none text-bg ${cornerClass}`}
                  >
                    <span>
                      <span>Nº {activeThumbnailNumber?.slice(0, -1)}</span>
                      <span className="text-base font-normal">
                        {activeThumbnailNumber?.slice(-1)}
                      </span>
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="lg:mt-section lg:col-span-8 pb-[clamp(6rem,10vw,10rem)]">
        <div className="grid grid-cols-1 border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60 md:grid-cols-[9rem_1fr] md:gap-6">
          <span>Date</span>
          <span>Name</span>
        </div>

        {writings.length > 0 ? (
          <ol onMouseLeave={() => setActiveThumbnail(null)}>
            {writings.map((writing) => (
              <li {...cursorTarget} key={writing.slug} className="list-none">
                <ListItem
                  writing={writing}
                  onMouseEnter={() => setActiveThumbnail(writing)}
                />
              </li>
            ))}
          </ol>
        ) : (
          <p className="py-8 text-base text-fg/60">
            No writings published yet.
          </p>
        )}
      </div>
    </div>
  );
}
