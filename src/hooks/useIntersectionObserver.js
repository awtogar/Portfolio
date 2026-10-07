'use client';

import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false,
} = {}) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const frozen = isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const node = ref.current;
    if (!node || frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen]);

  return { ref, isIntersecting };
};
