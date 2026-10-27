"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Navbar, Preloader, Header } from "@/components";

// TODO: child route transition (/projects/[slug], /labs/[slug], /writing/[slug])

// const pathname = usePathname(); // import from 'next/navigation'
// const isParentRoute = pathname.split('/').filter(Boolean).length < 2;

// <ViewTransition
//   key={pathname}
//   enter={isParentRoute ? 'page-enter' : 'detail-enter'}
//   exit={isParentRoute ? 'page-exit' : 'detail-exit'}
//   default="none">

// Needs: key={pathname}, CSS .detail-enter/.detail-exit,
// Preloader flag (module-level) so it doesn't replay on remount.

export default function Template({ children }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <Preloader />
      <Header />
      {/* <Navbar /> */}
      {children}
    </ViewTransition>
  );
}
