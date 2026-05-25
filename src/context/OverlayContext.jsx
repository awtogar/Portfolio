import { createContext, useContext, useState, useCallback, useRef } from 'react';

const OverlayContext = createContext(null);

export const OverlayProvider = ({ children }) => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const animatedCloseRef = useRef(null);

  const openOverlay = useCallback(() => {
    setOverlayOpen(true);
  }, []);

  const registerAnimatedClose = useCallback(fn => {
    animatedCloseRef.current = fn;
  }, []);

  const closeOverlay = useCallback(() => {
    if (animatedCloseRef.current) {
      animatedCloseRef.current();
    }
  }, []);

  const onOverlayClosed = useCallback(() => {
    setOverlayOpen(false);
    animatedCloseRef.current = null;
  }, []);

  return <OverlayContext.Provider value={{ overlayOpen, openOverlay, closeOverlay, registerAnimatedClose, onOverlayClosed }}>{children}</OverlayContext.Provider>;
};

export const useOverlay = () => useContext(OverlayContext);
