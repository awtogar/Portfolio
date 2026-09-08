'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import PageHeader from './PageHeader';

const HeaderSwitch = () => {
  const pathname = usePathname();
  return pathname === '/' ? <Header /> : <PageHeader />;
};

export default HeaderSwitch;
