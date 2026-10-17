'use client';

import { useCallback, useId } from 'react';
import { useCursor } from './CursorProvider';

export function useCursorTarget({ label = null, size = 'large', variant = 'default' } = {}) {
  const { isSupported, activateSubscription, deactivateSubscription } = useCursor();
  const id = useId();

  const onPointerEnter = useCallback(() => {
    if (!isSupported) return;
    activateSubscription({ id, label, size, variant });
  }, [activateSubscription, id, isSupported, label, size, variant]);

  const clearSubscription = useCallback(() => {
    deactivateSubscription(id);
  }, [deactivateSubscription, id]);

  return {
    onPointerEnter,
    onPointerLeave: clearSubscription,
    onPointerDown: clearSubscription,
  };
}
