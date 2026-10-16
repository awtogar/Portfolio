import React from 'react';
import { CreativeButton } from '@/components';

const Header = () => {
  return (
    <header>
      <div className="overflow-hidden fixed top-gap px-gap z-50 flex items-center justify-between w-full lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="overflow-hidden flex flex-col lg:col-span-3 gap-1">
          <span className="block overflow-hidden display-bold">Based in</span>
          <span className="block overflow-hidden display-bold text-neutral-700">Indonesia</span>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:col-span-3 lg:gap-1">
          <span className="block overflow-hidden display-bold">Working</span>
          <span className="block overflow-hidden display-bold text-neutral-700">Globally</span>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:col-span-3 lg:gap-1">
          <span className="block overflow-hidden display-bold">Freelance</span>
          <span className="block overflow-hidden display-bold text-neutral-700">Available</span>
        </div>
        <CreativeButton className="lg:col-start-10 lg:col-span-3 lg:justify-self-end">
          <span className="block overflow-hidden display-bold">Contact</span>
        </CreativeButton>
      </div>
    </header>
  );
};

export default Header;
