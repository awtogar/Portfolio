"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Navbar, Preloader, Header } from "@/components";
import { usePathname } from "next/navigation";

// TODO: child route transition (/projects/[slug], /labs/[slug], /writing/[slug])

// const pathname = usePathname(); // import from 'next/navigation'
// const isParentRoute = pathname.split('/').filter(Boolean).length < 2;

// Needs: key={pathname}, CSS .detail-enter/.detail-exit,
// Preloader flag (module-level) so it doesn't replay on remount.

export default function Template({ children }) {
  const pathname = usePathname();
  const isParentRoute = pathname.split("/").filter(Boolean).length < 2;

  return (
    <ViewTransition
      key={pathname}
      enter={isParentRoute ? "page-route-enter" : "page-dynamic-enter"}
      exit={isParentRoute ? "page-route-exit" : "page-dynamic-exit"}
      default="none"
    >
      <Preloader />
      {/* <Navbar /> */}
      {children}
    </ViewTransition>
  );
}
