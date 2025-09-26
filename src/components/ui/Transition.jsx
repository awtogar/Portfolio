import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { textTransitionAnim, curveTransitionAnim, translateTransitionAnim } from '../../data/anim';
import { pages_data } from '../../data/data';

const anim = variants => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  };
};

export default function PageTransition({ children, backgroundColor = 'bg-neutral-100' }) {
  const location = useLocation();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  const [showContent, setShowContent] = useState(false);

  // Get current page title berdasarkan dari pathname
  const getCurrentPageTitle = () => {
    const currentPage = Object.values(pages_data).find(page => {
      return page.href === location.pathname || location.pathname + '/' === page.href || location.pathname === page.href + '/';
    });

    return currentPage ? currentPage.title : '';
  };

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

  // Reset and show content setelah transisi selesai
  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <div className="relative" style={{ backgroundColor }} key={location.pathname}>
        <div
          style={{ opacity: dimensions.width == null ? 1 : 0 }}
          className="fixed top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none transition-opacity duration-0 delay-100"
        />
        <div className="fixed left-1/2 top-0 w-full h-full z-[9999] pointer-events-none flex items-center justify-center -translate-x-1/2 text-center">
          <motion.p className="absolute text-brand-primary text-[46px] text-center" {...anim(textTransitionAnim)}>
            {getCurrentPageTitle()}
          </motion.p>
        </div>

        {dimensions.width != null && <SVG {...dimensions} />}

        {/* Content */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: showContent ? 1 : 0 }} transition={{ duration: 0.3 }}>
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
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
    <motion.svg className="fixed fill-primary top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none" {...anim(translateTransitionAnim)}>
      <motion.path {...anim(curveTransitionAnim(initialPath, targetPath))} />
    </motion.svg>
  );
};
