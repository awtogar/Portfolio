import { useState, useEffect } from 'react';

const MIN_DURATION = 800; // minimum ms for animation to play

const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let networkReady = document.readyState === 'complete';
    let minElapsed = false;
    let done = false;

    const finish = () => {
      if (done || !networkReady || !minElapsed) return;
      done = true;
      setIsLoading(false);
    };

    // Fires when all resources (images, video, fonts) are loaded
    const onLoad = () => { networkReady = true; finish(); };

    if (!networkReady) {
      window.addEventListener('load', onLoad);
    }

    const minTimer = setTimeout(() => { minElapsed = true; finish(); }, MIN_DURATION);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(minTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : '';
    document.body.style.cursor = isLoading ? 'wait' : 'default';
  }, [isLoading]);

  return isLoading;
};

export default usePreloader;
