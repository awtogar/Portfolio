import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Grain = () => {
  const { isDark } = useTheme();

  const opacity = isDark ? '0.2' : '0.3';
  const baseFrequency = isDark ? '0.65' : '0.80';
  const fill = isDark ? '#000000' : '#ffffff';

  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full">
      <svg className="w-full h-full object-cover object-center group" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="simpleGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency={baseFrequency} numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#simpleGrain)" opacity={opacity} fill={fill} />
      </svg>
    </div>
  );
};

export default Grain;
