import { usePageFlow } from '@/context';

export const useCanRevealContent = () => {
  const { canRevealContent } = usePageFlow();
  return canRevealContent;
};
