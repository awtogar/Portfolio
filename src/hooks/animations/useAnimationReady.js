import { useLoading } from '@/context/LoadingProvider';

export const useAnimationReady = () => {
  const { isReady, isTransitioning } = useLoading();
  return isReady && !isTransitioning;
};
