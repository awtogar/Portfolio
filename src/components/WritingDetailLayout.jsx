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

export default function WritingDetailLayout({ writing, article }) {
  const hiddenTitleRef = useRef(null);
  const showTitleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 60rem)", () => {
      gsap.set(showTitleRef.current, { y: -20 });

      gsap.to(hiddenTitleRef.current, {
        y: 80,
        scale: 0.7,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: 0,
          end: "top top+=32",
          scrub: true,
        },
      });

      gsap.to(containerRef.current, {
        y: 120,
        scrollTrigger: {
          trigger: hiddenTitleRef.current,
          // start: "top 30%",
          // markers: true,
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
    <div className="flex flex-col gap-8 mt-12">
      <div className="w-full ">
        <h1 ref={hiddenTitleRef} className="display-heading text-h100">
          {writing.title}
        </h1>
      </div>
      <div
        ref={containerRef}
        className="gap-4 md:gap-6 lg:gap-section lg:grid lg:grid-cols-12 mt-12"
      >
        <aside className="lg:sticky lg:top-8 lg:col-span-4 lg:self-start">
          <h1
            ref={showTitleRef}
            className="hidden h-0 overflow-hidden text-h400 opacity-0 lg:block"
            aria-hidden="true"
          >
            {writing.title}
          </h1>
          <div>
            <p className="border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60">
              About
            </p>
            <p className="mt-4 text-base leading-body text-fg/80">
              {writing.description}
            </p>
          </div>
          <div className="mt-10 text-base-sm uppercase">
            <div className="grid grid-cols-2 gap-4 border-b border-dotted border-fg/25 py-3">
              <dt>Publish date:</dt>
              <dd className="normal-case">{formatDate(writing.date)}</dd>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b border-dotted border-fg/25 py-3">
              <dt>Reading time:</dt>
              <dd className="normal-case">{writing.readTime}</dd>
            </div>
            {writing.tags?.length > 0 && (
              <div className="grid grid-cols-2 gap-4 border-b border-dotted border-fg/25 py-3">
                <dt>Categories:</dt>
                <dd className="flex flex-wrap gap-2 normal-case">
                  {writing.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-dashed border-fg/30 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </div>
        </aside>
        <article className="lg:col-span-8">
          <p className="border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60">
            Article
          </p>
          <div className="mt-4">{article}</div>
        </article>
      </div>
    </div>
  );
}
