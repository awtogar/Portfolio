'use client'

import { motion } from 'framer-motion'

export default function AnimatedButton({ label = 'Our Work', href = '#' }) {
  return (
    <a
      href={href}
      className="group relative inline-flex h-[56px] w-fit items-center justify-center overflow-hidden rounded-full bg-accent-primary px-16 uppercase text-black"
    >
      {/* Text atas */}
      <motion.span
        className="absolute top-1/2 z-10 -translate-y-[-3rem] transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-full"
      >
        {label}
      </motion.span>

      {/* Text bawah */}
      <motion.span
        className="absolute top-full z-10 -translate-y-[3rem] transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:top-1/2"
      >
        {label}
      </motion.span>

      {/* Background bulat sliding dari bawah */}
      <motion.div
        className="absolute px-16 left-1/2 top-full h-full w-[60%] -translate-x-1/2 translate-y-8 rounded-full bg-[#c9ff18] transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:top-1/2 group-hover:-translate-y-1/2"
      />
    </a>
  )
}
