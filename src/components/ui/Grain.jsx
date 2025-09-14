import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Grain = () => {
  const { isDark } = useTheme();

  // Adjusted opacity values for better visual balance
  const primaryOpacity = isDark ? 0.12 : 0.08;
  const secondaryOpacity = isDark ? 0.06 : 0.03;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999]">
      <svg className="h-[150vh] w-full object-cover object-center" xmlns="http://www.w3.org/2000/svg">
        {/* First noise layer */}
        <filter id="noise1">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="1" stitchTiles="stitch" />
          <feBlend mode={isDark ? 'screen' : 'overlay'} />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise1)" opacity={primaryOpacity} />

        <filter id="noise2">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch" />
          <feBlend mode={isDark ? 'soft-light' : 'multiply'} />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise2)" opacity={secondaryOpacity} />
      </svg>
    </div>
  );
};

export default Grain;
