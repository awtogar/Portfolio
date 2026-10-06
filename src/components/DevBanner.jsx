'use client';

import { useState, useEffect } from 'react';

export default function DevBanner() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-[990] flex flex-col items-center gap-2 py-4 px-4 bg-primary text-secondary font-sans select-none cursor-pointer transition-opacity">
      <div className="text-base-sm md:text-xs tracking-widest font-medium uppercase opacity-90 [writing-mode:vertical-lr] rotate-180 whitespace-nowrap leading-none">
        Under development
      </div>
      <div className="text-base md:text-xl font-bold tracking-tight [writing-mode:vertical-lr] rotate-180 leading-none">G.</div>
    </div>
  );
}
