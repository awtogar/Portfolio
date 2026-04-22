import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useLoading } from '@/context/LoadingProvider';

function useAutoLines(text, wrapperRef) {
  const [lines, setLines] = useState([]);
  const ghostRef = useRef(null);

  useEffect(() => {
    if (!text || !wrapperRef.current) return;

    const measure = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const cs = window.getComputedStyle(wrapper);

      if (!ghostRef.current) {
        ghostRef.current = document.createElement('div');
        ghostRef.current.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ghostRef.current);
      }

      const ghost = ghostRef.current;
      Object.assign(ghost.style, {
        position: 'fixed',
        top: '-9999px',
        left: '0px',
        visibility: 'hidden',
        pointerEvents: 'none',
        width: `${wrapper.offsetWidth}px`,
        fontSize: cs.fontSize,
        fontFamily: cs.fontFamily,
        fontWeight: cs.fontWeight,
        fontStyle: cs.fontStyle,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        wordSpacing: cs.wordSpacing,
        textTransform: cs.textTransform,
        whiteSpace: 'normal',
        wordBreak: 'break-word',
      });

      const words = text.split(' ').filter(Boolean);
      ghost.innerHTML = words.map(w => `<span>${w}&nbsp;</span>`).join('');

      const spans = ghost.querySelectorAll('span');
      const lineMap = new Map();
      spans.forEach((span, i) => {
        const top = Math.round(span.getBoundingClientRect().top);
        if (!lineMap.has(top)) lineMap.set(top, []);
        lineMap.get(top).push(words[i]);
      });

      const result = Array.from(lineMap.entries())
        .sort(([a], [b]) => a - b)
        .map(([, ws]) => ws.join(' '));

      setLines(result);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(wrapperRef.current);

    return () => {
      ro.disconnect();
      if (ghostRef.current) {
        document.body.removeChild(ghostRef.current);
        ghostRef.current = null;
      }
    };
  }, [text]);

  return lines;
}

const LineReveal = ({ line, idx, staggerDelay, startDelay, lineClassName, globalReady, ready }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -5% 0px' });

  const shouldAnimate = isInView && globalReady && ready;

  return (
    <span ref={ref} style={{ position: 'relative', display: 'block', overflow: 'hidden', lineHeight: 'inherit' }}>
      <motion.span
        className={lineClassName}
        style={{ display: 'block' }}
        initial={{ y: '105%' }}
        animate={shouldAnimate ? { y: '0%' } : { y: '105%' }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
          delay: startDelay + idx * staggerDelay,
        }}
      >
        {line}
      </motion.span>
    </span>
  );
};

const TextReveal = ({ text, lines: manualLines, as: Component = 'div', className = '', lineClassName = '', style, staggerDelay = 0.08, startDelay = 0, ready = true }) => {
  const { isReady, isTransitioning } = useLoading();
  // Global gate: only animate after preloader exits AND no transition overlay is active
  const globalReady = isReady && !isTransitioning;

  const wrapperRef = useRef(null);
  const autoLines = useAutoLines(text, wrapperRef);
  const lines = text ? autoLines : (manualLines ?? []);

  // When lines change (resize remeasures), remount LineReveal children → re-animates
  const [revealKey, setRevealKey] = useState(0);
  const prevLinesRef = useRef(null);
  useEffect(() => {
    const sig = lines.join('||');
    if (prevLinesRef.current !== null && prevLinesRef.current !== sig) {
      setRevealKey(k => k + 1);
    }
    prevLinesRef.current = sig;
  }, [lines]);

  return (
    <Component ref={wrapperRef} className={className} style={style}>
      {lines.map((line, idx) => (
        <LineReveal
          key={`${revealKey}-${idx}`}
          line={line}
          idx={idx}
          staggerDelay={staggerDelay}
          startDelay={startDelay}
          lineClassName={lineClassName}
          globalReady={globalReady}
          ready={ready}
        />
      ))}
    </Component>
  );
};

export default TextReveal;
