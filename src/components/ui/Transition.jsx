import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "motion/react"
import { useLocation } from 'react-router-dom';
import { useDimensions } from '../../hooks/useDimensions';
import { transitionCurvePath, transitionTextDirection, transitionSlideDown } from '../../data/anim';
import { pages } from '../../data/data';

const SVG_HEIGHT_OFFSET = 300;
const TARGET_CURVE_Y = -SVG_HEIGHT_OFFSET * 0.001;

const TransitionContent = ({ pageTitle, dimensions }) => {
  const initialPath = `M0 ${dimensions.height} L${dimensions.width} ${dimensions.height} L${dimensions.width} 0 Q${dimensions.width / 2} ${-SVG_HEIGHT_OFFSET} 0 0 L0 ${dimensions.height}`;
  const targetPath = `M0 ${dimensions.height} L${dimensions.width} ${dimensions.height} L${dimensions.width} 0 Q${dimensions.width / 2} ${TARGET_CURVE_Y} 0 0 L0 ${dimensions.height}`;
  // debug
  // console.log('transition initial', initialPath);
  // console.log('transition target', targetPath);

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center overflow-visible"
      variants={transitionSlideDown}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: '100vh', width: '100vw' }}
    >
      <motion.div className="absolute z-10" variants={transitionTextDirection} initial="initial" animate="animate" exit="exit">
        <motion.p key={pageTitle} className="textTransition">
          {pageTitle}
        </motion.p>
      </motion.div>

      <svg className="absolute top-0 left-0 w-full text-primary overflow-visible" height={dimensions.height + SVG_HEIGHT_OFFSET * 2}>
        <motion.path
          variants={transitionCurvePath(initialPath, targetPath)}
          initial="initial"
          animate="animate"
          exit="exit"
          fill="currentColor"
          className="transition-colors"
        />
      </svg>
    </motion.div>
  );
};

export default function Transition({ children, isLoading }) {
  const location = useLocation();
  const dimensions = useDimensions();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getCurrentPageTitle = () => {
    const currentPage = Object.values(pages).find(page => {
      return page.href === location.pathname || location.pathname + '/' === page.href || location.pathname === page.href + '/';
    });
    return currentPage ? currentPage.title : '';
  };

  useEffect(() => {
    // cek preloader masih jalan apa kga
    if (isLoading) return;

    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Fallback kalo dimensions belum siap render langsung aje childrennya
  if (dimensions.width === null) return <>{children}</>;

  return (
    <>
      <AnimatePresence mode="wait">{isTransitioning && <TransitionContent key={location.pathname} pageTitle={getCurrentPageTitle()} dimensions={dimensions} />}</AnimatePresence>
      {children}
    </>
  );
}
