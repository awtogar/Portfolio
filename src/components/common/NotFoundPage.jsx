'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useInitialLoad } from '@/hooks';
import { useLoading } from '@/context';
import { BaseSection, CreativeButton, TransitionLink } from '@/components';

export default function NotFoundPage() {
  useInitialLoad();

  const { phase, setPageReady } = useLoading();

  useEffect(() => {
    if (phase === 'wait-for-ready') setPageReady();
  }, [phase, setPageReady]);

  useEffect(() => {
    document.body.classList.add('not-found-page');
    return () => document.body.classList.remove('not-found-page');
  }, []);

  return (
    <BaseSection
      sectionClassName="section-padding-x"
      containerClassName="flex-col h-[85svh] lg:h-[95svh] m-auto w-full max-w-[1920px]"
    >
      <div className="flex flex-col items-center justify-center h-full w-full gap-s600">
        <motion.h1
          className="font-serif text-display leading-[1.1] tracking-[-0.05em] uppercase text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Page not found
        </motion.h1>

        <motion.p
          className="text-base text-primary/40 max-w-xs text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <CreativeButton variant="fill" size="md" data-cursor data-cursor-magnetic data-cursor-size="small">


            <TransitionLink
              data-cursor
              data-cursor-content="Home"
              data-cursor-fill="primary"
              data-cursor-text-color="secondary"
              to="/"
              className="flex items-center justify-center gap-1 group cursor-pointer"
            >
              <span>Go Home</span>
            </TransitionLink>

          </CreativeButton>
        </motion.div>
      </div>
    </BaseSection>
  );
}
