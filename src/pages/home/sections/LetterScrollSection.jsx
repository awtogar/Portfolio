import { BaseSection } from '@/components';
import { LetterScroll } from '@/components/ui/LetterScroll';

const LetterScrollSection = () => {
  return (
    <BaseSection sectionClassName="py-0" containerClassName="py-0">
      <LetterScroll lines={['MODERN', 'TECH STACK']} textColor="text-primary" />
    </BaseSection>
  );
};

export default LetterScrollSection;
