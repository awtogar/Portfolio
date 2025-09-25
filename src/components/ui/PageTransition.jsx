import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { textTransitionAnim, curveTransitionAnim, translateTransitionAnim } from '../../data/anim';
import { pages_data } from '../../data/data';

// Create routes mapping from your pages_data
const routes = {
  [pages_data.home.href]: pages_data.home.title,
  [pages_data.about.href]: pages_data.about.title,
  [pages_data.project.href]: pages_data.project.title,
  [pages_data.contact.href]: pages_data.contact.title,
};

const anim = variants => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  };
};

export default function PageTransition({ children, backgroundColor }) {
  const location = useLocation();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Reset and show content after transition delay
  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800); // Adjust this delay to match your transition duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="fixed top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none bg-black transition-opacity duration-0 delay-100"
      />
      <motion.p 
        className="absolute left-1/2 top-[40%] text-white text-[46px] z-[3] -translate-x-1/2 text-center" 
        {...anim(textTransitionAnim)}
      >
        {routes[location.pathname]}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      
      {/* Content with controlled visibility */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;
  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg 
      className="fixed top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none" 
      {...anim(translateTransitionAnim)}
    >
      <motion.path {...anim(curveTransitionAnim(initialPath, targetPath))} />
    </motion.svg>
  );
};