import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { BaseSection } from '@/components';
import { useCursorInteraction } from '@/cursor';
import { projects } from '@/data/projects';
import { useOverlay, useLenis } from '@/context';

function ThumbCard({ project, onExpand }) {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const { boundsRef } = useCursorInteraction({ size: 'small', fill: 'primary' });

  const handleEnter = () => {
    gsap.to(imgRef.current, { scale: 1.08, duration: 0.8, ease: 'expo.out' });
  };
  const handleLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.8, ease: 'expo.out' });
  };

  // merge boundsRef with wrapRef
  const setRefs = el => {
    wrapRef.current = el;
    boundsRef.current = el;
  };

  return (
    <div
      ref={setRefs}
      className="thumb-card group relative flex flex-col gap-3 cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => onExpand(project, wrapRef)}
    >
      {/* index */}
      <span className="font-mono text-[11px] tracking-widest text-primary/30 uppercase">{String(project.id).padStart(2, '0')}</span>

      {/* image container */}
      <div className="relative overflow-hidden" style={{ height: 'var(--thumb-h)' }}>
        <div ref={imgRef} className="w-full h-full will-change-transform">
          <img src={project.thumbnail} alt={project.client} className="w-full h-full object-cover" />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      {/* meta */}
      <div className="flex items-end justify-between">
        <span className="text-sm uppercase tracking-widest font-medium leading-none">{project.client}</span>
        <span className="text-[10px] uppercase tracking-widest text-primary/75 font-mono">{project.year}</span>
      </div>
    </div>
  );
}

// ── Expanded Article Overlay ────────────────────────────────────────────────
// ── Expanded Article Overlay ────────────────────────────────────────────────
function ArticleOverlay({ project, originRect, onClose }) {
  const overlayRef = useRef(null);
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const metaRef = useRef(null);
  const closeRef = useRef(null);
  const { registerAnimatedClose } = useOverlay();

  const IMG_H = '72vh';

  useEffect(() => {
    if (!project) return;
    const overlay = overlayRef.current;

    gsap.set(overlay, { opacity: 1 });
    gsap.set(imgWrapRef.current, {
      x: originRect.left,
      y: originRect.top,
      width: originRect.width,
      height: originRect.height,
    });
    gsap.set(imgRef.current, { scale: 1 });
    gsap.set(titleRef.current, { y: '105%' });
    gsap.set(metaRef.current, { opacity: 0, y: 8 });
    gsap.set(closeRef.current, { opacity: 0 });

    const tl = gsap.timeline();
    tl.to(imgWrapRef.current, {
      x: 0,
      y: 0,
      width: '100vw',
      height: IMG_H,
      duration: 1,
      ease: 'expo.inOut',
    })
      .to(imgRef.current, { scale: 1.05, duration: 1, ease: 'expo.inOut' }, 0)
      .to(titleRef.current, { y: '0%', duration: 0.9, ease: 'expo.out' }, 0.55)
      .to(metaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' }, 0.65)
      .to(closeRef.current, { opacity: 1, duration: 0.4 }, 0.8);
  }, [project]);

  const handleClose = useCallback(() => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(closeRef.current, { opacity: 0, duration: 0.2 })
      .to(
        [titleRef.current, metaRef.current],
        {
          y: '105%',
          opacity: 0,
          duration: 0.5,
          ease: 'expo.in',
          stagger: 0.05,
        },
        0
      )
      .to(
        imgWrapRef.current,
        {
          x: originRect.left,
          y: originRect.top,
          width: originRect.width,
          height: originRect.height,
          duration: 0.8,
          ease: 'expo.inOut',
        },
        0.1
      )
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, 0.7);
  }, [onClose, originRect]);

  useEffect(() => {
    registerAnimatedClose(handleClose);
  }, [handleClose, registerAnimatedClose]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 bg-secondary opacity-0" style={{ pointerEvents: project ? 'auto' : 'none' }}>
      {/* full-bleed image */}
      <div ref={imgWrapRef} className="absolute top-0 left-0 overflow-hidden will-change-transform" style={{ position: 'fixed' }}>
        <div ref={imgRef} className="w-full h-full will-change-transform">
          <img src={project?.thumbnail} alt={project?.client} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* compressed content strip */}
      <div className="absolute left-0 right-0 section-padding-x pt-4 pb-6" style={{ top: IMG_H }}>
        {/* top rule */}
        <div className="border-t border-primary/20 mb-4" />

        {/* single row: index — title — tags + desc */}
        <div className="grid gap-x-[var(--sp-lg)]" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
          {/* index */}
          <span className="font-mono text-[11px] tracking-widest text-primary/30 uppercase self-baseline pt-1">{String(project?.id).padStart(2, '0')}</span>

          {/* client title */}
          <div className="overflow-hidden">
            <h2 ref={titleRef} className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-none tracking-tight will-change-transform">
              {project?.client}
            </h2>
          </div>

          {/* tags + description stacked right */}
          <div ref={metaRef} className="flex flex-col items-end gap-2 max-w-[280px] text-right self-end">
            <div className="flex gap-3">
              {project?.tags.map(t => (
                <span key={t} className="font-mono text-[10px] tracking-widest text-[var(--color-text-muted)] uppercase">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-[clamp(0.75rem,1.1vw,0.9rem)] text-[var(--color-text-muted)] leading-snug">{project?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── HomeRecentProject ───────────────────────────────────────────────────────
function HomeRecentProject() {
  const [expanded, setExpanded] = useState(null); // { project, rect }
  const { openOverlay, onOverlayClosed } = useOverlay();
  const { stopScroll, startScroll } = useLenis();

  const handleExpand = (project, wrapRef) => {
    const rect = wrapRef.current.getBoundingClientRect();
    const img = wrapRef.current.querySelector('img');
    const imgRect = img ? img.getBoundingClientRect() : rect;
    setExpanded({ project, rect: imgRect });
    openOverlay();
    stopScroll();
  };

  const handleClose = () => {
    setExpanded(null);
    onOverlayClosed();
    startScroll();
  };

  return (
    <>
      <BaseSection>
        {/* section header */}
        <div className="flex items-end justify-between mb-s400 border-t border-primary pt-s400">
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-none tracking-tight">Recent Work</h2>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Click to expand</span>
        </div>

        {/* thumbnail grid */}
        <div
          className="grid gap-s400"
          style={{
            '--thumb-h': '320px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          {projects.map(p => (
            <ThumbCard key={p.id} project={p} onExpand={handleExpand} />
          ))}
        </div>
      </BaseSection>

      {/* expanded overlay */}
      {expanded && <ArticleOverlay project={expanded.project} originRect={expanded.rect} onClose={handleClose} />}
    </>
  );
}

export default HomeRecentProject;
