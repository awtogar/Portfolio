import { Magnetic, Bounds } from '../..';

const HamburgerButton = ({ isActive, onToggle, stickyRef }) => (
  <Magnetic>
    <div
      className={`pr-2 relative flex flex-col justify-center items-center h-[60px] w-[60px] gap-[0.2rem] md:w-[4.5rem] md:gap-2 md:pointer-events-none cursor-pointer  ${isActive ? 'active' : ''}`}
      onClick={onToggle}
    >
      <div
        className={`block w-11 h-[3px] bg-neutral-100 mix-blend-difference transition-transform duration-300 ease-in-out origin-center
        ${isActive ? 'scale-x-50' : 'scale-x-60'} md:w-[30px] md:h-[2px]
        ${isActive ? 'md:scale-x-100' : 'md:scale-x-60'} dark:bg-primary`}
      />
      <div
        className={`block w-11 h-[3px] bg-neutral-100 mix-blend-difference transition-transform duration-300 ease-in-out origin-center
        ${isActive ? 'scale-x-50' : 'scale-x-60'} md:w-[30px] md:h-[2px]
        ${isActive ? 'md:scale-x-100' : 'md:scale-x-60'} dark:bg-primary`}
      />
      <Bounds ref={stickyRef} />
    </div>
  </Magnetic>
);

export default HamburgerButton;
