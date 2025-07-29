import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { menuSlide } from "../../anim";
import Link from "./Link/link";
import Curve from "./Curve/curve";
import { useLenis } from "../../Scroller/SmoothScrollLenis";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Nav({ closeMenu }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const { stopScroll, startScroll } = useLenis();
  const handleToggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Stop Lenis scrolling when menu is open
    stopScroll();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Resume Lenis scrolling when menu closes
      startScroll();
    };
  }, [closeMenu, stopScroll, startScroll]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-main/30 dark:bg-canvas/30 md:bg-main/30 md:dark:bg-canvas/30 z-10"
        onClick={closeMenu}
      />
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="
          !h-[100svh] w-[100svw] bg-main fixed right-0 top-0 text-canvas z-10 md:w-[45svw]"
      >
        <div className="
          box-border !h-full pl-16 pr-6 pt-16 pb-12 flex flex-col justify-between
          lg:p-[100px] lg:pl-[140px]
        ">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="
              flex flex-col text-[4rem] gap-2 mt-18
              lg:text-[56px] lg:gap-3 lg:mt-20
            ">
              <div className="flex items-center">
                <div className="flex w-full text-based border-b border-based uppercase text-[0.6rem]">
                    <p>Navigation</p>
                </div>
                <div className="flex md:hidden items-center">
                  <button className="cursor-pointer flex items-center justify-center h-10 w-10 group text-canvas dark:text-main"
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
            </button>
          </div>
          </div>
            {navItems.map((data, index) => {
              return (
                <Link
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                  closeMenu={closeMenu}
                />
              );
            })}
          </div>
          <div className="
            flex w-full justify-between text-[0.6rem] gap-[0.6rem] flex-wrap
            lg:text-xs lg:gap-10
          ">
            <a>Awwwards</a>
            <a>Instagram</a>
            <a>Dribble</a>
            <a>LinkedIn</a>
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}