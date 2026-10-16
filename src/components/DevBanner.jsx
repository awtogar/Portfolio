'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { RiCloseLine } from '@remixicon/react';

export default function DevBanner() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, { height: 0, minHeight: 0, duration: 1, delay: 0.4, ease: 'expo.out' });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const dismiss = () =>
    gsap.to(rootRef.current, {
      height: 0,
      minHeight: 0,
      duration: 0.8,
      ease: 'expo.inOut',
      onComplete: () => setVisible(false),
    });

  if (!visible) return null;

  return (
    <div ref={rootRef} style={{ viewTransitionName: 'devbanner' }} className="flex px-6 overflow-hidden gap-2 items-center w-full bg-brand-primary text-neutral-50 h-[3svh] min-h-8">
      <div className="w-full">
        <p className="flex-1 text-base-sm uppercase display-bold px-s200">Open to work</p>
      </div>
      <button type="button" onClick={dismiss} aria-label="Dismiss banner" className="px-s200 h-full cursor-pointer group shrink-0 bg-brand-primary">
        <RiCloseLine size={18} className="transition-transform duration-300 group-hover:rotate-90" />
      </button>
    </div>
  );
}
