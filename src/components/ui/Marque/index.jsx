import React from 'react';
import { motion } from 'framer-motion';

export default function MarqueAnimation() {
  const marqueContent = (
    <>
      <div className="flex items-center shrink-0 px-8 text-[2rem]">
        tell none
        <div className="ml-8 flex items-center">
          <svg class="w-8 h-8 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 56 56"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.666666666666667" d="M44.333 28H11.667m32.667 0 -9.333 9.333m9.333 -9.333 -9.333 -9.333"/></svg>          
        </div>
      </div>
      <div className="flex items-center shrink-0 px-8 text-[2rem]">
        modern creative studio
        <div className="ml-8 flex items-center">
          <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 56 56"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.666666666666667" d="M44.333 28H11.667m32.667 0 -9.333 9.333m9.333 -9.333 -9.333 -9.333"/></svg>          
        </div>
      </div>
      <div className="flex items-center shrink-0 px-8 text-[2rem]">
        modern creative studio
        <div className="ml-8 flex items-center">
          <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 56 56"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.666666666666667" d="M44.333 28H11.667m32.667 0 -9.333 9.333m9.333 -9.333 -9.333 -9.333"/></svg>          
        </div>
      </div>
    </>
  );

  return (
    <div className="justify-center items-center h-screen w-[100svw]">
      <motion.div>
        <section className="h-16"></section>
        <section className="relative w-full h-full overflow-hidden bg-main text-based py-8 uppercase">
          <div className="flex w-fit animate-scroll-x">
            {marqueContent}
            {marqueContent}
          </div>
        </section>
        <section className="h-16"></section>
      </motion.div>
    </div>
  );
}
