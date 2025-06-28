import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { menuSlide } from '../anim.js';
import Link from './Link/link';
import Curve from './Curve/curve';
import './nav.css';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Nav({ closeMenu }) {

  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling when menu is open
    document.body.style.overflow = 'default';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [closeMenu]);

  return (
    <>
      {/* Overlay to close menu when clicking outside */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-shade-800/60 dark:bg-shade-100/60 z-10"
        onClick={closeMenu}
      />
      <motion.div 
        variants={menuSlide} 
        initial="initial" 
        animate="enter" 
        exit="exit" 
        className="menu"
        >
         <div className="body ">
              <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="nav">
                      <div className="header">
                          <p>Navigation</p>
                      </div>
                      {
                        navItems.map( (data, index) => {
                          return <Link 
                          key={index} 
                          data={{...data, index}} 
                          isActive={selectedIndicator == data.href} 
                          setSelectedIndicator={setSelectedIndicator}
                          closeMenu={closeMenu}>
                          </Link>
                        })
                      }
              </div>
              <div className="footer">
                  <a>Awwwards</a>
                  <a>Instagram</a>
                  <a>Dribble</a>
                  <a>LinkedIn</a>
              </div>
          </div>
          <Curve />
      </motion.div>
    </>
  )
}