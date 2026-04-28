'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TimelineSVGLine = ({ containerRef }) => {
  const svgRef = useRef(null);
  const thinPathRef = useRef(null);
  const progressPathRef = useRef(null);

  useEffect(() => {
    if (!containerRef?.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;

    const updatePath = () => {
      const height = container.offsetHeight;

      const svg = svgRef.current;
      if (!svg || height <= 0) return;

      svg.setAttribute('viewBox', `0 0 20 ${height}`);
      svg.style.height = `${height}px`;

      const d = `M 10 0 L 10 ${height}`;

      thinPathRef.current?.setAttribute('d', d);
      progressPathRef.current?.setAttribute('d', d);
    };

    updatePath();

    const resizeObserver = new ResizeObserver(updatePath);
    resizeObserver.observe(container);

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top+=80',
      end: 'bottom bottom-=20',
      scrub: 1.2,
      onUpdate: self => {
        if (!progressPathRef.current) return;

        const progress = self.progress;
        progressPathRef.current.style.strokeDasharray = '1';
        progressPathRef.current.style.strokeDashoffset = 1 - progress;
      },
    });

    window.addEventListener('resize', updatePath);

    return () => {
      resizeObserver.disconnect();
      trigger.kill();
      window.removeEventListener('resize', updatePath);
    };
  }, [containerRef]);

  return (
    <svg ref={svgRef} width="24" height="100%" viewBox="0 0 20 200" preserveAspectRatio="none" style={{ height: '100%', width: 'auto' }}>
      {/* base line */}
      <path ref={thinPathRef} stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" fill="none" />

      {/* progress */}
      <path ref={progressPathRef} className="stroke-primary" strokeWidth="1" fill="none" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    </svg>
  );
};

export default TimelineSVGLine;
