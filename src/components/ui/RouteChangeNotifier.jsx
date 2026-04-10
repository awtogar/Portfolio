import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@/context/LoadingProvider';

const RouteChangeNotifier = () => {
  const location = useLocation();
  const { setPageReady, phase } = useLoading();

  useEffect(() => {
    if (phase === 'wait-for-ready') {
      requestAnimationFrame(() => {
        setPageReady();
      });
    }
  }, [location.pathname, phase, setPageReady]);

  return null;
};

export default RouteChangeNotifier;
