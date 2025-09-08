import { useState } from 'react';
import { motion } from 'framer-motion';

// motion components
const MotionA = motion.a;

export default function SplitMenuText({
  children,
  className = '',
  href,
  scrollToSection,
  textcolor1 = 'text-secondary',
  textcolor2 = 'text-primary',
  ...props
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (scrollToSection && href) {
      // Extract the ID from href (remove the #)
      const id = href.replace('#', '');
      scrollToSection(id);
    }
  };

  return (
    <MotionA
      href={href}
      onClick={handleClick}
      className={`relative inline-block cursor-pointer overflow-hidden ${className}`}
      initial={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {/* Original text that moves up on hover */}
      <motion.span 
        className={`block z-20 will-change-transform ${textcolor1}`} 
        initial={false} 
        transition={{ type: 'linear', duration: 0.3 }} 
        animate={{ y: isHovering ? -20 : 0 }}
      >
        {children}
      </motion.span>
      
      {/* Duplicate text that slides in from bottom */}
      <motion.span
        className={`absolute top-0 left-0 block z-20 will-change-transform ${textcolor2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? 0 : 20 }}
      >
        {children}
      </motion.span>
    </MotionA>
  );
}