import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from "motion/react"

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({ text, spinDuration = 20, onHover = 'speedUp', className = '', centerIcon = null, centerClassName = '' }) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;
    let transitionConfig;
    let scaleVal = 1;
    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 },
        };
        scaleVal = 1;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }
    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Wrapper container */}
      <div className="relative w-[168px] h-[168px]">
        {/* rotating text component */}
        <motion.div
          className={`m-0 mx-auto rounded-full w-[168px] h-[168px] relative text-primary font-medium text-center cursor-pointer origin-center ${className}`}
          style={{ rotate: rotation }}
          initial={{ rotate: 0 }}
          animate={controls}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          {letters.map((letter, i) => {
            const rotationDeg = (360 / letters.length) * i;
            const factor = Math.PI / letters.length;
            const x = factor * i;
            const y = factor * i;
            const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;
            return (
              <span
                key={i}
                className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
                style={{ transform, WebkitTransform: transform }}
              >
                {letter}
              </span>
            );
          })}
        </motion.div>
        {/* Center icon/content - This stays static while text rotates */}

        {/* Outtermask */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-full h-full rounded-full p-8 flex items-center justify-center font-bold z-10`}
        >
          {/* inner mask */}
          <div
            className={`w-full h-full bg-primary rounded-full flex items-center justify-center font-bold ${centerClassName}`}
          >
            {centerIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularText;
