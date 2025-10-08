import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useDimensions } from '../../hooks/useDimensions';
import { transitionCurvePath } from '../../data/anim';
import { pages_data } from '../../data/data';

const SVG_HEIGHT_OFFSET = 300;
const TRANSITION_DURATION = 1200;

const TransitionContent = ({ pageTitle, dimensions, backgroundColor }) => {
  // Define the path with curve at the top that flattens as it moves down
  const initialPath = `
    M0 0
    L${dimensions.width} 0
    L${dimensions.width} ${SVG_HEIGHT_OFFSET}
    Q${dimensions.width / 2} ${-100} 0 ${SVG_HEIGHT_OFFSET}
    L0 0
  `;

  const targetPath = `
    M0 0 
    L${dimensions.width} 0 
    L${dimensions.width} ${dimensions.height + SVG_HEIGHT_OFFSET} 
    Q${dimensions.width / 2} ${dimensions.height + SVG_HEIGHT_OFFSET} 0 ${dimensions.height + SVG_HEIGHT_OFFSET} 
    L0 0
  `;

  return (
    <motion.div
      className={`fixed inset-0 z-[9998] flex flex-col items-center justify-center overflow-hidden ${backgroundColor}`}
      variants={{
        initial: { y: 0 },
        exit: { y: '100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
      }}
      initial="initial"
      exit="exit"
    >
      {/* SVG with correct path animation */}
      <svg className="w-full z-[9999] fixed top-0" height={dimensions.height + SVG_HEIGHT_OFFSET} preserveAspectRatio="none">
        <motion.path variants={transitionCurvePath(initialPath, targetPath)} initial="initial" exit="exit" fill="currentColor" className={backgroundColor} />
      </svg>
      <motion.div className="fixed z-[9998] flex flex-col items-center justify-center">
        <motion.p
          key={pageTitle}
          className="z-10 mt-8 text-4xl md:text-6xl font-semibold text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {pageTitle}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default function Transition({ children, backgroundColor = 'bg-primary' }) {
  const location = useLocation();
  const dimensions = useDimensions();
  const [isTransitioning, setIsTransitioning] = useState(true);

  const getCurrentPageTitle = () => {
    const currentPage = Object.values(pages_data).find(page => {
      return page.href === location.pathname || location.pathname + '/' === page.href || location.pathname === page.href + '/';
    });
    return currentPage ? currentPage.title : '';
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION + 300);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (dimensions.width === null) return <>{children}</>;

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && <TransitionContent key={location.pathname} pageTitle={getCurrentPageTitle()} dimensions={dimensions} backgroundColor={backgroundColor} />}
      </AnimatePresence>
      {children}
    </>
  );
}
