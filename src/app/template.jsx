"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Preloader } from "@/components";
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
      <Preloader />
      {children}
    </ViewTransition>
  );
}
