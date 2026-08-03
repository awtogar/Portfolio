'use client';

import { useEffect } from 'react';
import { LenisProvider, LoadingProvider } from '@/context';
import { CursorProvider, CustomCursor } from '@/cursor';
import { Header, Footer, Preloader, PageTransition, AppHandlers, DevBanner } from '@/components';

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
          <DevBanner />
          <Header />
          <CustomCursor />
          <AppHandlers />
          <main className="page-container">
            {children}
            <Footer />
          </main>
          <PageTransition />
        </LoadingProvider>
      </CursorProvider>
    </LenisProvider>
  );
}
