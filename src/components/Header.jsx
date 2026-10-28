"use client";
import React from "react";
import Link from "next/link";
import PersonalLogo from "@/assets/images/logo.svg";
import { motion, AnimatePresence } from "motion/react";
import { useCursorTarget } from "@/cursor";

const links = [
  { label: "Home", href: "/" },
  { label: "Labs", href: "/labs" },
  { label: "Projects", href: "/projects" },
  { label: "Writings", href: "/writings" },
];

const Header = () => {
  const cursorLabelTarget = useCursorTarget({ label: null });
  const cursorHomeTarget = useCursorTarget({ label: null });

  return (
    <AnimatePresence>
      <motion.header
        style={{ viewTransitionName: "header" }}
        initial={{
          clipPath: "polygon( 0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        }}
        animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        exit={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
        className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-neutral-50 select-none"
      >
        <div className="px-gap py-gap flex items-center justify-between w-full">
          <div className="overflow-hidden flex items-center lg:gap-12">
            <Link {...cursorHomeTarget} href="/">
              <PersonalLogo
                title="Personal Logo"
                aria-label="Personal Logo"
                className="w-auto h-8 lg:h-10 fill-current"
              />
            </Link>
            <div className="hidden lg:hidden lg:flex-col lg:gap-1">
              <span className="block overflow-hidden text-base display-bold">
                Working
              </span>
              <span className="block overflow-hidden text-base display-bold text-neutral-50/60">
                Globally
              </span>
            </div>

            <div className="hidden lg:hidden lg:flex-col lg:gap-1">
              <span className="block overflow-hidden text-base display-bold">
                Freelance
              </span>
              <span className="block overflow-hidden text-base display-bold text-neutral-50/60">
                Available
              </span>
            </div>
          </div>

          {/* navbar */}
          <nav className="flex flex-col items-end md:flex-row md:items-center md:gap-8">
            {links.map((item, i) => (
              <Link
                {...cursorLabelTarget}
                key={i}
                href={item.href}
                className="block text-base overflow-hidden display-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
