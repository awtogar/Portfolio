"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import ListItem from "./ListItem";
import { useCursorTarget } from "@/cursor";
import { useLenis } from "@/context/LenisContext";

export default function ListLayout({ writings }) {
  const [activeThumbnail, setActiveThumbnail] = useState(null);

  const cursorTarget = useCursorTarget();
  const { lenis } = useLenis();
  const pointerPosition = useRef(null);

  const activeThumbnailIndex = activeThumbnail
    ? writings.findIndex((writing) => writing.slug === activeThumbnail.slug)
    : -1;

  const corners = {
    1: "items-end justify-start",
    2: "items-start justify-start",
    3: "items-start justify-end",
    0: "items-end justify-end",
  };
  const cornerClass = corners[(activeThumbnailIndex + 1) % 4];

  const activeThumbnailNumber =
    activeThumbnailIndex >= 0
      ? String(activeThumbnailIndex + 1).padStart(2, "0")
      : null;

  const handleThumbnailEnter = (writing) => {
    if (activeThumbnail?.slug === writing.slug) return;

    setActiveThumbnail(writing);
  };

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerPosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => {
      const point = pointerPosition.current;
      if (!point) return;

      const element = document.elementFromPoint(point.x, point.y);
      const row = element?.closest("[data-writing-slug]");
      const slug = row?.dataset.writingSlug;
      const writing = slug && writings.find((item) => item.slug === slug);

      if (writing) handleThumbnailEnter(writing);
      else setActiveThumbnail(null);
    };

    lenis.on("scroll", handleScroll);
    return () => lenis.off("scroll", handleScroll);
  }, [lenis, writings, activeThumbnail]);

  // A slow, slightly overshooting cubic gives the thumbnail a physical reveal
  // instead of the abrupt scale change used by the list rows.
  const ease = [0.16, 1, 0.3, 1];

  const layer = {
    hidden: { scale: 0.01 },
    show: { scale: 1, transition: { duration: 0.5, ease } },
    exit: (mode) =>
      mode === "leave"
        ? { scale: 0.01, transition: { duration: 0.5, ease } }
        : { opacity: 0, transition: { delay: 0.5, duration: 0 } },
  };

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
          <p className="mt-2 text-base md:text-400 leading-body text-fg/80 md:max-w-[36ch]">
            Here&apos;s where I share my thoughts, insights, and growth. New
            blog article monthly, released towards the end of every month.
          </p>
        </div>
        {/* container */}
        <div className="relative mt-12 hidden aspect-square w-full max-w-[280px] lg:block">
          <AnimatePresence custom={activeThumbnail ? "swap" : "leave"}>
            {activeThumbnail?.thumbnail && (
              <motion.div
                key={activeThumbnail.slug}
                custom="swap"
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
              <li {...cursorTarget} key={writing.slug} className="list-none">
                <ListItem
                  writing={writing}
                  onMouseEnter={() => handleThumbnailEnter(writing)}
                  onMouseLeave={() => setActiveThumbnail(null)}
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
