'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import AlternativeHeader from './AlternativeHeader';

const HeaderSwitch = () => {
  const pathname = usePathname();
  return pathname === '/' ? <Header /> : <AlternativeHeader />;
};

export default HeaderSwitch;
