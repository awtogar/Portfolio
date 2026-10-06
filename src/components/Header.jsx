import Logo from '@/assets/images/brand.svg?react';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header fixed top-0 left-0 w-full z-50 flex items-center justify-between h-[86px] py-8 px-6 md:px-8 lg:px-12 mix-blend-difference text-white">
      <div className="header-logo">
        <div className="logo-item">
          <Link href="/">
            <Logo className="w-auto h-4 md:h-4 lg:h-6" />
          </Link>
        </div>
      </div>
      <nav className="header-navbar">
        <div className="navbar-items flex items-center justify-between gap-6">
          <div className="navbar-item">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="navbar-item">
            <Link href="/writing">Writing</Link>
          </div>
          <div className="navbar-item">
            <Link href="/guestbook">Guestbook</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
