"use client";
import Link from "next/link";
import { navlink } from "@/data/data";
import PersonalLogo from "@/assets/images/logo.svg";
import { useCursorTarget } from "@/cursor";
import { BaseSection } from "@/components";

export function Header() {
  const cursorLabelTarget = useCursorTarget({ label: null });
  const cursorHomeTarget = useCursorTarget({ label: null });

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference select-none">
      {/* Match BaseSection's order: viewport padding first, then a centred max-width container. */}
      <div className="section-padding-x w-full">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between py-gap">
          <div className="overflow-hidden flex items-center lg:gap-12">
            <Link {...cursorHomeTarget} href="/">
              <PersonalLogo
                title="Personal Logo"
                className="w-auto h-8 lg:h-10 text-bg fill-current"
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
            {navlink.map((item) => (
              <Link
                {...cursorLabelTarget}
                key={item.href}
                href={item.href}
                className="block text-bg text-base overflow-hidden display-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
