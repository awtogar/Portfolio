'use client';

import { useMemo } from 'react';
import { motion, useSpring, AnimatePresence } from 'motion/react';
import { useCursor } from './CursorProvider';
import { CURSOR_SIZES, CURSOR_FILLS, CURSOR_CONTENTS, CURSOR_TEXT_COLORS } from './constants';

const CustomCursor = () => {
  const { cursorState, hasMouse, mouseX, mouseY } = useCursor();
  const { isActive, size, content, textColor, fill, cursorSize: explicitSize, idleFill } = cursorState;

  const sizes = CURSOR_SIZES[size] || CURSOR_SIZES.small;
  const cursorSize = isActive ? (explicitSize ?? sizes.hovered) : sizes.idle;

  const smoothOptions = useMemo(() => ({ damping: 20, stiffness: 300, mass: 0.5 }), []);
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  const cursorTextColor = CURSOR_TEXT_COLORS[textColor] || textColor || CURSOR_TEXT_COLORS.primary;
  const cursorFill = fill && CURSOR_FILLS[fill] ? CURSOR_FILLS[fill] : fill || CURSOR_FILLS.primary;
  const resolvedIdleFill = idleFill && CURSOR_FILLS[idleFill] ? CURSOR_FILLS[idleFill] : idleFill || CURSOR_FILLS.primary;
  const activeFill = isActive ? cursorFill : resolvedIdleFill;
  const displayContent = CURSOR_CONTENTS[content] !== undefined ? CURSOR_CONTENTS[content] : content;

  if (!hasMouse) return null;

  return (
    <motion.div
      style={{ left: smoothX, top: smoothY }}
      animate={{ width: cursorSize, height: cursorSize }}
      className={`hidden md:block fixed rounded-full pointer-events-none z-[49] ${activeFill}`}
    >
      <AnimatePresence>
        {isActive && content && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`w-full h-full flex items-center justify-center font-secondary font-bold text-base-sm tracking-tight pointer-events-none ${cursorTextColor}`}
          >
            {displayContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;
