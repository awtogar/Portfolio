'use client';

import { useEffect } from 'react';
import { LenisProvider, LoadingProvider } from '@/context';
import { CursorProvider, CustomCursor } from '@/cursor';
import { HeaderSwitch, Preloader, PageTransition, AppHandlers, DevBanner } from '@/components';

export default function ClientProviders({ children }) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <LenisProvider>
      <CursorProvider>
        <LoadingProvider>
          <Preloader />
          {/* <DevBanner /> */}
          <HeaderSwitch />
          <CustomCursor />
          <AppHandlers />
          <main className="page-container">{children}</main>
          <PageTransition />
        </LoadingProvider>
      </CursorProvider>
    </LenisProvider>
  );
}
