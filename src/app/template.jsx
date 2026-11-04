"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { usePathname } from "next/navigation";

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
      {children}
    </ViewTransition>
  );
}
