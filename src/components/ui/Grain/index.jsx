import React from 'react';

const Grain = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-99999999">
      <svg className="h-[150vh] w-full object-cover object-center" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise1">
          <feTurbulence type="fractalNoise" baseFrequency="0.64" numOctaves="1" stitchTiles="stitch" />
          <feBlend mode="screen" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise1)" opacity="0.08" />

        <filter id="noise2">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="1" stitchTiles="stitch" />
          <feBlend mode="screen" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise2)" opacity="0.12" />
      </svg>
    </div>
  );
};

export default Grain;
