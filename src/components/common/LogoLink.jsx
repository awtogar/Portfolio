'use client';

import { TransitionLink, TextReveal } from '@/components';
import Gar from '@/assets/images/brand.svg?react';

const LogoLink = ({ startDelay = 0.15 }) => (
  <TransitionLink to="/" className="relative cursor-pointer text-secondary dark:text-primary" aria-label="Home">
    <TextReveal as="span" className="relative inline-block" mode="epoch" startDelay={startDelay}>
      <Gar className="w-auto md:h-4 lg:h-6" />
    </TextReveal>
  </TransitionLink>
);

export default LogoLink;
