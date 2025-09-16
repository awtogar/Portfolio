import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Grain = () => {
  const { isDark } = useTheme();
  
  const grainSettings = {
    fineGrain: {
      opacity: isDark ? 0.08 : 0.06,
      baseFrequency: '0.46',
      blend: 'overlay'
    },
    mediumGrain: {
      opacity: isDark ? 0.05 : 0.07,
      baseFrequency: '0.24',
      blend: isDark ? 'soft-light' : 'overlay'
    },
    coarseGrain: {
      opacity: isDark ? 0.04 : 0.05,
      baseFrequency: '0.3',
      blend: isDark ? 'screen' : 'multiply'
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999]">
      <svg 
        className="h-screen w-full object-cover object-center" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="fineGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency={grainSettings.fineGrain.baseFrequency}
              numOctaves="3" 
              stitchTiles="stitch"
              result="fineTurbulence" 
            />
            <feColorMatrix 
              in="fineTurbulence" 
              type="saturate" 
              values="0"
              result="fineDesaturated" 
            />
            <feComponentTransfer result="fineAdjusted">
              <feFuncA type="discrete" tableValues="0.6 0.7 0.8 0.9 1.0" />
            </feComponentTransfer>
            <feBlend 
              in="SourceGraphic" 
              in2="fineAdjusted" 
              mode={grainSettings.fineGrain.blend} 
            />
          </filter>

          <filter id="mediumGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="turbulence" 
              baseFrequency={grainSettings.mediumGrain.baseFrequency}
              numOctaves="3" 
              stitchTiles="stitch"
              result="mediumTurbulence" 
            />
            <feColorMatrix 
              in="mediumTurbulence" 
              type="saturate" 
              values="0"
              result="mediumDesaturated" 
            />
            <feComponentTransfer result="mediumAdjusted">
              <feFuncA type="discrete" tableValues="0.4 0.6 0.7 0.8 0.9" />
            </feComponentTransfer>
            <feGaussianBlur 
              in="mediumAdjusted" 
              stdDeviation="0.3" 
              result="mediumBlurred" 
            />
            <feBlend 
              in="SourceGraphic" 
              in2="mediumBlurred" 
              mode={grainSettings.mediumGrain.blend} 
            />
          </filter>

          <filter id="coarseGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency={grainSettings.coarseGrain.baseFrequency}
              numOctaves="2" 
              stitchTiles="stitch"
              result="coarseTurbulence" 
            />
            <feColorMatrix 
              in="coarseTurbulence" 
              type="saturate" 
              values="0"
              result="coarseDesaturated" 
            />
            <feComponentTransfer result="coarseAdjusted">
              <feFuncA type="discrete" tableValues="0.3 0.5 0.7 0.8" />
            </feComponentTransfer>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="coarseTurbulence" 
              scale="1" 
              xChannelSelector="R" 
              yChannelSelector="G" 
              result="displaced" 
            />
            <feBlend 
              in="displaced" 
              in2="coarseAdjusted" 
              mode={grainSettings.coarseGrain.blend} 
            />
          </filter>

          <filter id="colorGrade" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix 
              type="matrix" 
              values={isDark 
                ? "1.05 0.02 0.02 0 0.01   0.02 1.03 0.02 0 0.01   0.02 0.02 1.08 0 0.02   0 0 0 1 0"
                : "1.02 0.01 0.01 0 -0.005  0.01 1.01 0.01 0 -0.005  0.01 0.01 1.03 0 -0.01   0 0 0 1 0"
              }
              result="colorGraded" 
            />
          </filter>
        </defs>
        <rect 
          width="100%" 
          height="100%" 
          filter="url(#fineGrain)" 
          opacity={grainSettings.fineGrain.opacity}
          fill={isDark ? "#ffffff" : "#000000"}
        />
        <rect 
          width="100%" 
          height="100%" 
          filter="url(#mediumGrain)" 
          opacity={grainSettings.mediumGrain.opacity}
          fill={isDark ? "#cccccc" : "#333333"}
        />
        <rect 
          width="100%" 
          height="100%" 
          filter="url(#coarseGrain)" 
          opacity={grainSettings.coarseGrain.opacity}
          fill={isDark ? "#aaaaaa" : "#555555"}
        />
        <rect 
          width="100%" 
          height="100%" 
          filter="url(#colorGrade)" 
          opacity={isDark ? 0.001 : 0.012}
          fill={isDark ? "#ff9966" : "#4466cc"}
        />
      </svg>
    </div>
  );
};

export default Grain;
