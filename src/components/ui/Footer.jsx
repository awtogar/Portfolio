'use client';

import BaseSection from '../common/BaseSection';
import HoverRotate from '@/components/ui/HoverRotate';
import Bento from '@/components/ui/Bento';

export default function Footer() {
  return (
    <BaseSection as="footer" sectionID="contact" sectionClassName="pt-section">
      <Bento />
    </BaseSection>
  );
}
