"use client";

import { useEffect, useRef } from "react";
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

    mm.add("(min-width: 1024px)", () => {
      gsap.set(showTitleRef.current, { y: 24 });

      gsap.to(showTitleRef.current, {
        height: "auto",
        marginBottom: "1em",
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hiddenTitleRef.current,
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(hiddenTitleRef.current, {
        y: -100,
        scale: 0.7,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="">
      <div className="hidden lg:block top-0 lg:w-full py-4" aria-hidden="true">
        <h1
          ref={hiddenTitleRef}
          className="display-heading text-display text-start"
        >
          {writing.title}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 ">
        <aside
          ref={containerRef}
          className="lg:sticky lg:col-span-4 lg:top-[clamp(8rem,14vw,14rem)] lg:self-start"
        >
          <h1
            ref={showTitleRef}
            className="block lg:h-[0rem] overflow-hidden text-h400 font-[500] leading-[1.1] lg:opacity-0 "
          >
            {writing.title}
          </h1>
          <div className="mt-6 lg:max-w-[36ch] lg:mt-8">
            <p className="border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60">
              About
            </p>
            <p className="mt-2 text-base leading-body text-fg/80">
              {writing.description}
            </p>
          </div>
          <dl className="mt-6 text-base-sm uppercase lg:mt-8 lg:max-w-[36ch]">
            <div className="flex items-baseline justify-between border-b border-dotted border-fg/25 py-2">
              <dt>Publish date:</dt>
              <dd className="text-right normal-case lg:text-left">
                <time dateTime={writing.date}>{formatDate(writing.date)}</time>
              </dd>
            </div>
            {writing.authors && (
              <div className="flex items-baseline justify-between border-b border-dotted border-fg/25 py-2">
                <dt>Authors:</dt>
                <dd className="text-right normal-case lg:text-left">
                  {writing.authors}
                </dd>
              </div>
            )}
            <div className="flex items-baseline justify-between border-b border-dotted border-fg/25 py-2">
              <dt>Reading time:</dt>
              <dd className="text-right normal-case lg:text-left">
                {writing.readTime}
              </dd>
            </div>
            {writing.tags?.length > 0 && (
              <div className="flex items-start justify-between gap-4 border-b border-dotted border-fg/25 py-2">
                <dt className="shrink-0 py-1">Categories:</dt>
                <dd className="flex-1">
                  <ul className="flex flex-wrap justify-end gap-2 normal-case">
                    {writing.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-dashed border-fg/30 px-2.5 py-1 lg:px-3"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </aside>
        {/* article */}
        <article className="mt-8 lg:col-span-8 lg:mt-8 pb-[clamp(14rem,14vw,14rem)]">
          <p className="border-b border-fg/20 pb-3 text-base-sm uppercase text-fg/60">
            Article
          </p>
          <div className="mt-4 lg:mt-4">{article}</div>
        </article>
      </div>
    </div>
  );
}
