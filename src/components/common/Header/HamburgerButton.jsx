import { TextReveal } from '@/components';

const HamburgerButton = ({ isActive, onToggle }) => {
  return (
    <div onClick={onToggle}>
      <TextReveal as="div" isHero replayOnNavigate startDelay={0.35}>
        <div
          data-cursor
          data-cursor-magnetic
          data-cursor-sticky
          data-cursor-size="large"
          className={`relative flex flex-col justify-center items-center h-[60px] w-[60px] gap-[0.3rem] md:gap-2 md:pointer-events-none cursor-pointer  ${isActive ? 'active' : ''}`}
        >
          <div
            className={`block w-12 h-[3px] bg-white mix-blend-difference transition-transform duration-300 ease-in-out origin-center
        ${isActive ? 'scale-x-50' : 'scale-x-60'} md:w-[30px] md:h-[2px]
        ${isActive ? 'md:scale-x-100' : 'md:scale-x-60'}`}
          />
          <div
            className={`block w-12 h-[3px] bg-white mix-blend-difference transition-transform duration-300 ease-in-out origin-center
        ${isActive ? 'scale-x-50' : 'scale-x-60'} md:w-[30px] md:h-[2px]
        ${isActive ? 'md:scale-x-100' : 'md:scale-x-60'}`}
          />
        </div>
      </TextReveal>
    </div>
  );
};

export default HamburgerButton;
