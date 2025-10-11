import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useDimensions } from '../../hooks/useDimensions';
import { transitionCurvePath, transitionTextDirection, transitionSlideDown } from '../../data/anim';
import { pages_data } from '../../data/data';

const SVG_HEIGHT_OFFSET = 300;
const TRANSITION_DURATION = 1200;

const TransitionContent = ({ pageTitle, dimensions }) => {
  const initialPath = `
  M0 0 
  L${dimensions.width} 0 
  L${dimensions.width} ${-SVG_HEIGHT_OFFSET}
  Q${dimensions.width / 2} ${-SVG_HEIGHT_OFFSET * 2} 0 ${-SVG_HEIGHT_OFFSET}
  L0 0
`;
  const targetPath = `
  M0 0 
  L${dimensions.width} 0 
  L${dimensions.width} ${-SVG_HEIGHT_OFFSET}
  L0 ${-SVG_HEIGHT_OFFSET}
  L0 0
`;

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      variants={transitionSlideDown}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: '100vh', width: '100vw' }}
    >
      <svg className="absolute top-0 left-0 w-full z-10 bg-primary" height={dimensions.height + SVG_HEIGHT_OFFSET}>
        <motion.path
          variants={transitionCurvePath(initialPath, targetPath)}
          initial="initial"
          animate="animate"
          exit="exit"
          fill="currentColor"
          className="transition-colors duration-300"
        />
      </svg>
      <motion.div className="relative z-20 text-center " variants={transitionTextDirection} initial="initial" animate="animate" exit="exit">
        <motion.p key={pageTitle} className="textTransition">
          {pageTitle}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default function Transition({ children }) {
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
      <AnimatePresence mode="wait">{isTransitioning && <TransitionContent key={location.pathname} pageTitle={getCurrentPageTitle()} dimensions={dimensions} />}</AnimatePresence>
      {children}
    </>
  );
}

// TODO: Make the content dissapear while the transition is happening with animation goes up. and enter again when the transition is done. with smoothly
