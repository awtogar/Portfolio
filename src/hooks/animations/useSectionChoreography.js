import { useCanRevealContent } from './useCanRevealContent';

export const useSectionChoreography = ({
  stagger = 0.1,
  baseDelay = 0,
  preset = 'fadeUp',
} = {}) => {
  const ready = useCanRevealContent();

  const getChildProps = (index, overrides = {}) => ({
    preset,
    delay: baseDelay + index * stagger,
    ready,
    ...overrides,
  });

  return { getChildProps, ready };
};
