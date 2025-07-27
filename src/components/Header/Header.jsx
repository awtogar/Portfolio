import { RiSunLine, RiMoonLine } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Nav from "../Header/Nav/nav";
import "./header.css";

const Header = ({ burgerRef, themeToggleRef, logoElement }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className="header-wrapper">
      <div className="header pt-8 fixed flex w-full justify-between items-center mix-blend-difference z-[100]">
        <div
          className="flex items-center text-gxr font-bold font-secondary tracking-tighter justify-center md:text-2xl antialiased px-4 h-[60px]"
          ref={logoElement}
        >
          <a href="/" className="text-canvas dark:text-main cursor-pointer">
            Gxr.
          </a>
        </div>
        {/* button and hamburger */}
        <div className="flex items-center px-4 h-[60px]">
          <motion.div
            className="toggle hidden md:flex text-canvas dark:text-main relative h-[60px] items-center justify-center"
            animate={{
              opacity: isActive ? 0 : 1,
              pointerEvents: isActive ? "none" : "auto",
            }}
            transition={{
              opacity: {
                duration: isActive ? 0.3 : 1.5,
                ease: "easeInOut",
              },
            }}
          >
            <button
              className="cursor-pointer flex items-center justify-center h-[60px] group"
              onClick={handleToggleTheme}
              aria-label="Toggle dark mode"
              type="button"
            >
              <div className="relative">
                <RiSunLine
                  className="inline dark:hidden transition-transform duration-300 ease-in-out group-hover:-rotate-90"
                  size={24}
                />
                <RiMoonLine
                  className="hidden dark:inline transition-transform duration-300 ease-in-out group-hover:rotate-45"
                  size={24}
                />
              </div>
              <div className="bounds" ref={themeToggleRef}></div>
            </button>
          </motion.div>
          <div
            className={`burger relative flex flex-col justify-center items-center h-[60px] w-[60px] gap-[0.2rem] md:w-[4.5rem] md:gap-2 md:pointer-events-none cursor-pointer  ${
              isActive ? "active" : ""
            }`}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <motion.div ref={burgerRef} className="bounds" />
          </div>
        </div>
      </div>
      {/* only show nav when burger active : done */}
      <div className="nav-wrapper">
        <AnimatePresence mode="wait">
          {isActive && <Nav closeMenu={closeMenu} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
