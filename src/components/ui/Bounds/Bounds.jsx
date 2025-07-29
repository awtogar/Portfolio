import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Bounds = forwardRef(({ className = "", ...props }, ref) => (
  <motion.div
    ref={ref}
    className={`absolute top-0 left-0 w-[100%] h-[100%] pointer-events-auto hover:scale-[3] ${className}`}
    {...props}
  />
));

export default Bounds;
