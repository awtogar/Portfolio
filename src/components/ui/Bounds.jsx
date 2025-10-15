import React, { forwardRef } from "react";
import { motion } from "motion/react"

const Bounds = forwardRef(({ className = "", ...props }, ref) => (
  <motion.div
    ref={ref}
    className={`hidden md:block absolute top-0 left-0 w-[100%] h-[100%] pointer-events-auto hover:scale-[3] ${className}`}
    {...props}
  />
));

export default Bounds;
