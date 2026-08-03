'use client';

import { useState, useEffect } from 'react';

export default function DevBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('dev_banner_dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('dev_banner_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleDismiss}
      className="fixed top-1/2 -translate-y-1/2 right-0 z-[990] flex flex-col items-center gap-5 py-8 px-4 bg-primary text-secondary shadow-xl font-sans select-none cursor-pointer hover:opacity-90 transition-opacity"
    >

      <div className="text-base-sm md:text-xs tracking-widest font-medium uppercase opacity-90 [writing-mode:vertical-lr] rotate-180 whitespace-nowrap leading-none">
        Under development
      </div>
      <div className="text-xl md:text-2xl font-bold tracking-tight [writing-mode:vertical-lr] rotate-180 leading-none">
        G.
      </div>
    </div>
  );
}
