import { useRef, useMemo } from 'react';
import { useLetterScroll } from '@/hooks';

export const LetterScroll = ({ lines, start = 'top 25%', end = 'bottom 120%', scrub = 2 }) => {
  const containerRef = useRef(null);

  const parsedLines = useMemo(
    () =>
      lines.map(line =>
        line.split(' ').map((word, wordIndex, allWords) => ({
          word,
          hasSpaceAfter: wordIndex < allWords.length - 1,
          letters: word.split(''),
        }))
      ),
    [lines]
  );

  useLetterScroll(containerRef, [parsedLines], { start, end, scrub });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <ul className="letter-scroll flex flex-col justify-center items-center h-[500px] lg:h-[800px] md:py-12">
        {(() => {
          let globalWordIndex = 0;
          return parsedLines.map((words, lineIndex) => (
            <li
              key={lineIndex}
              className={`text-[clamp(48px,14vw,250px)] font-bold tracking-tight ${lineIndex === 0 ? 'leading-[0.85]' : 'leading-[0.9] lg:leading-[0.85]'} overflow-hidden flex`}
            >
              {words.map(({ hasSpaceAfter, letters }, wi) => {
                const currentWordIndex = globalWordIndex++;
                return letters.map((char, charIndex) => {
                  const isLastLetter = charIndex === letters.length - 1;
                  const needsWordSpacing = hasSpaceAfter && isLastLetter;
                  return (
                    <span
                      key={`${wi}-${charIndex}`}
                      className={`letter relative inline-block${needsWordSpacing ? ' mr-[clamp(16px,4.5vw,72px)]' : ''}`}
                      data-word-idx={currentWordIndex}
                      data-char-idx={charIndex}
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
