export const menuSlideLeft = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.9, ease: [0.76, 0, 0.24, 1]}}
}

export const navSlide = {
    initial: {x: 80, opacity: 0},
    enter: i => ({
        x: 0, 
        opacity: 1,
        transition: {
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1], 
            delay: 0.05 * i
        }
    }),
    exit: i => ({
        x: 80, 
        opacity: 0,
        transition: {
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1], 
            delay: 0.05 * (4 - i) // Reverse the cascade on exit
        }
    })
}

export const navDotScalling = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
};

export const PreloaderSlideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const preloaderCurvePath = (initialPath, targetPath) => ({
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  });

export const transitionSlideDown = {
  // mulai dari atas layar
  initial: { top: "-100vh" }, 
  animate: {
    // turun ke posisi normal
    top: "0", 
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    top: "100vh", // keluar ke bawah layar
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};


export const transitionCurvePath = (initialPath, targetPath) => ({
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    // animate: {
    //   d: initialPath,
    //   transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    // },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  });

  export const transitionTextDirection = {
  initial: { 
    opacity: 0, 
    y: "-50%" 
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};