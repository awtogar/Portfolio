'use client';

import { TransitionLink, TextReveal } from '@/components';
import Logo from '@/assets/images/brand.svg?react';
import { cursorPresets } from '@/cursor';

const LogoLink = ({ startDelay = 0.15 }) => (
  <TransitionLink to="/" className="relative cursor-pointer text-secondary dark:text-primary" aria-label="Home" {...cursorPresets.nav}>
    <TextReveal as="span" className="relative inline-block" mode="epoch" startDelay={startDelay}>
      <Logo className="w-auto h-4 md:h-4 lg:h-6" />{' '}
    </TextReveal>
  </TransitionLink>
);

export default LogoLink;
