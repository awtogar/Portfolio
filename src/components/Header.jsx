"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import PersonalLogo from "@/assets/images/logo.svg";
import { useCursorTarget } from "@/cursor";

const links = [
  { label: "Home", href: "/" },
  { label: "Labs", href: "/labs" },
  { label: "Projects", href: "/projects" },
  { label: "Writings", href: "/writings" },
];

export function Header() {
  const cursorLabelTarget = useCursorTarget({ label: null });
  const cursorHomeTarget = useCursorTarget({ label: null });

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference select-none">
      <div className="px-gap py-gap flex items-center justify-between w-full">
        <div className="overflow-hidden flex items-center lg:gap-12">
          <Link {...cursorHomeTarget} href="/">
            <PersonalLogo
              title="Personal Logo"
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
        <nav className="flex flex-col gap-2 items-end md:flex-row md:items-center md:gap-8">
          {links.map((item, i) => (
            <Link
              {...cursorLabelTarget}
              key={i}
              href={item.href}
              className="block text-bg text-base overflow-hidden display-bold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

Header.displayName = "Header";

export default Header;
