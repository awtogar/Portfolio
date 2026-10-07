'use client';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { Header, Navbar, CustomCursor, Preloader, Footer } from '@/components';

export default function Template({ children }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <Preloader />
      <CustomCursor />
      <Header />
      <Navbar />
      {children}
    </ViewTransition>
  );
}
