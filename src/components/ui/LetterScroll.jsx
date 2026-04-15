import { useRef, useMemo } from 'react';
import { useLetterScroll } from '@/hooks';

export const LetterScroll = ({ lines, start = 'top 25%', end = 'bottom 120%', scrub = 2 }) => {
  const containerRef = useRef(null);

  const linesData = useMemo(
    () =>
      lines.map(line =>
        line.split(' ').map((word, wi, arr) => ({
          word,
          addGap: wi < arr.length - 1,
          letters: word.split(''),
        }))
      ),
    [lines]
  );

  useLetterScroll(containerRef, [linesData], { start, end, scrub });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <ul className="letter-scroll flex flex-col justify-center items-center h-[500px] lg:h-[800px] py-24">
        {(() => {
          let globalWordIdx = 0;
          return linesData.map((words, lineIdx) => (
            <li key={lineIdx} className={`text-[clamp(48px,14vw,250px)] font-bold tracking-tight ${lineIdx === 0 ? 'leading-[0.85]' : 'leading-[0.9] lg:leading-[0.85]'} overflow-hidden flex`}>
              {words.map(({ addGap, letters }, wi) => {
                const currentWordIdx = globalWordIdx++;
                return letters.map((char, li) => {
                  const isLastChar = li === letters.length - 1;
                  const hasMargin = addGap && isLastChar;
                  return (
                    <span 
                      key={`${wi}-${li}`} 
                      className={`letter relative inline-block${hasMargin ? ' mr-[clamp(16px,4.5vw,72px)]' : ''}`}
                      data-word-idx={currentWordIdx}
                      data-char-idx={li}
                    >
                      <span>{char}</span>
                      <span className="absolute bottom-full left-0">{char}</span>
                    </span>
                  );
                });
              })}
            </li>
          ));
        })()}
      </ul>
    </div>
  );
};
