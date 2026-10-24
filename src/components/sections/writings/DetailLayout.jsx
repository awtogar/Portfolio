"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

function formatDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue;
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function DetailLayout({ writing, article }) {
  const hiddenTitleRef = useRef(null);
  const showTitleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 60rem)", () => {
      gsap.to(hiddenTitleRef.current, {
        y: 60,
        scale: 0.7,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: 0,
          end: "top top+=32",
          scrub: true,
          markers: true,
        },
      });

      gsap.to(containerRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: hiddenTitleRef.current,
          // start: "top 30%",
          markers: true,
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(showTitleRef.current, {
        height: "auto",
        marginBottom: "1em",
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="flex flex-col lg:gap-8 lg:mt-12">
      {/* container 1 */}
      <div
        ref={containerRef}
        className=" w-full justify-start flex sticky top-0"
      >
        <h1 ref={hiddenTitleRef} className="display-heading text-h100">
          {writing.title}
        </h1>
      </div>
      {/* container 2 */}
      <div className="flex flex-col gap-12 lg:gap-section lg:grid lg:grid-cols-12">
        <aside className="flex flex-col gap-4 lg:sticky lg:top-[clamp(8rem,14vw,14rem)] lg:col-span-4 lg:self-start lg:gap-0">
          <h1
            ref={showTitleRef}
            className="hidden h-[0rem] overflow-hidden text-h200 display-heading opacity-0 lg:block"
            aria-hidden="true"
          >
            {writing.title}
          </h1>
          {/* todo */}
          <div className="mt-6 lg:mt-0">
            <p className="border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60 lg:pb-3">
              About
            </p>
            <p className="mt-2 text-base leading-body text-fg/80 lg:mt-4">
              {writing.description}
            </p>
          </div>
          <dl className="mt-2 text-base-sm uppercase lg:mt-6">
            <div className="flex items-baseline justify-between border-b border-dotted border-fg/25 py-2">
              <dt>Publish date:</dt>
              <dd className="text-right normal-case lg:text-left">
                {formatDate(writing.date)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between border-b border-dotted border-fg/25 py-2">
              <dt>Authors:</dt>
              <dd className="text-right normal-case lg:text-left">
                {writing.authors}
              </dd>
            </div>
            <div className="flex items-baseline justify-between border-b border-dotted border-fg/25 py-2">
              <dt>Reading time:</dt>
              <dd className="text-right normal-case lg:text-left">
                {writing.readTime}
              </dd>
            </div>
            {writing.tags?.length > 0 && (
              <div className="flex items-start justify-between gap-4 border-b border-dotted border-fg/25 py-2">
                <dt className="py-1 lg:py-0">Categories:</dt>
                <dd className="flex flex-wrap justify-end gap-2 normal-case lg:justify-start">
                  {writing.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-dashed border-fg/30 px-2.5 py-1 lg:px-3"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </aside>
        <article className="lg:col-span-8 pb-[clamp(14rem,14vw,14rem)]">
          <p className="border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60 lg:pb-3">
            Article
          </p>
          <div className="mt-4 lg:mt-4">{article}</div>
        </article>
      </div>
    </div>
  );
}
