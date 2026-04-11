import { useRef, useMemo } from 'react';
import { useLetterScroll } from '@/hooks';

const LINE_STYLES = [
  {
    className: 'font-black text-primary transition-colors duration-500',
    style: { WebkitTextStroke: '0px' },
  },
  {
    className: 'font-black text-transparent transition-colors duration-500',
    style: {
      WebkitTextStroke: '1.5px currentColor',
      color: 'transparent',
      transform: 'skewX(1.5deg)',
    },
    colorClass: 'text-primary',
  },
];

export const LetterScroll = ({ lines, start = 'top 0%', end = 'bottom 120%', scrub = 2 }) => {
  const containerRef = useRef(null);

  const linesData = useMemo(
    () =>
      lines.map(line =>
        line.split(' ').map((word, wi, arr) => ({
          word,
          addGap: wi < arr.length - 1,
          letters: word.split('').map(char => ({ char, numClones: 3, clones: Array(3).fill(char) })),
        }))
      ),
    [lines]
  );

  useLetterScroll(containerRef, [linesData], { start, end, scrub });

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center md:py-28 overflow-hidden select-none h-screen">
      <ul className="flex flex-col items-center justify-center gap-0 list-none w-full">
        {linesData.map((words, lineIdx) => {
          const style = LINE_STYLES[lineIdx % LINE_STYLES.length];
          return (
            <li key={lineIdx} className="relative flex items-center w-full justify-center">
              <div className={`relative flex text-[clamp(52px,11vw,130px)] leading-none tracking-tight ${style.className} ${style.colorClass || ''}`} style={style.style}>
                {words.map(({ word, addGap, letters }, wi) => (
                  <span key={wi} className="flex">
                    {letters.map(({ char, numClones, clones }, li) => {
                      const isLast = wi === words.length - 1 && li === letters.length - 1;
                      return (
                        <span key={li} className="inline-block overflow-hidden text-primary" style={{ height: '1em', lineHeight: '1em' }}>
                          <span className="ls-track flex flex-col items-center" data-clones={numClones} style={{ lineHeight: '1em' }}>
                            {clones.map((c, i) => (
                              <span key={i} className="block randomize" style={{ height: '1em', lineHeight: '1em' }} aria-hidden="true">
                                {c}
                              </span>
                            ))}
                            <span className={`block ${isLast ? 'transition-colors duration-500' : ''}`} style={{ height: '1em', lineHeight: '1em' }}>
                              {char}
                            </span>
                          </span>
                        </span>
                      );
                    })}
                    {addGap && <span className="inline-block" style={{ width: 'clamp(14px, 3vw, 52px)' }} />}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="absolute bottom-8 left-[10%] right-[10%] h-px bg-secondary-muted/15 transition-colors duration-500" />
    </div>
  );
};
