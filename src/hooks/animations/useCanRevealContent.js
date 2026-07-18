import { useLoading } from '@/context';

export const useCanRevealContent = () => {
  const { canRevealContent } = useLoading();
  return canRevealContent;
};
