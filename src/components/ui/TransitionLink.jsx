'use client';

import { forwardRef } from 'react';
import { useLoading } from '@/context';

const TransitionLink = forwardRef(({ to, href, children, onClick, className, ...props }, ref) => {
  const { navigateTo } = useLoading();
  const destination = to || href;

  const handleClick = e => {
    e.preventDefault();
    if (onClick) onClick(e);
    if (destination) navigateTo(destination);
  };

  return (
    <a href={destination} onClick={handleClick} className={className} ref={ref} {...props}>
      {children}
    </a>
  );
});

export default TransitionLink;
