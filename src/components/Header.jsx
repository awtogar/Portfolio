import React from 'react';
import { contact_info } from '@/data/data';
import { CreativeButton } from '@/components';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-neutral-50 select-none">
      <div className="px-gap py-gap flex items-center justify-between w-full lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="overflow-hidden flex flex-col lg:col-span-3 gap-1">
          <span className="block overflow-hidden  text-base display-bold">Based in</span>
          <span className="block overflow-hidden  text-base display-bold text-neutral-50/60">Indonesia</span>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:col-span-3 lg:gap-1">
          <span className="block overflow-hidden text-base display-bold">Working</span>
          <span className="block overflow-hidden text-base display-bold text-neutral-50/60">Globally</span>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:col-span-3 lg:gap-1">
          <span className="block overflow-hidden text-base display-bold">Freelance</span>
          <span className="block overflow-hidden text-base display-bold text-neutral-50/60">Available</span>
        </div>
        <CreativeButton variant="secondary" className="lg:col-start-10 lg:col-span-3 lg:justify-self-end" href={`mailto:${contact_info.email}`}>
          <span className="block text-base overflow-hidden display-bold">Contact</span>
        </CreativeButton>
      </div>
    </header>
  );
};

export default Header;
