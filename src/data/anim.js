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
}

// export const slideUp = {
//     initial: {
//         y: "100%"
//     },
//     open: (i) => ({
//         y: "0%",
//         transition: {duration: 0.5, delay: 0.01 * i}
//     }),
//     closed: {
//         y: "100%",
//         transition: {duration: 0.5}
//     }
// }



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

export const transitionText = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    bottom: -100,
    transition: {duration: 0.6, delay: 0.6, ease: [0.76, 0, 0.24, 1]},
    transitionEnd: {top: "47.5%"}
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: {duration: 0.5, delay: 0.1, ease: [0.33, 1, 0.68, 1]}
  }
}


export const transitionCurve = (initialPath, targetPath) => {
    return {
        initial: {
            d: initialPath,
        },
        enter: {
            d: targetPath,
            transition: {duration: 1.5, delay: 0.6, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: initialPath,
            transition: {duration: 1.5, ease: [0.76, 0, 0.24, 1]}
        }
    }
}

export const transitionDirection = {
    initial: {
        top: 0
    },
    enter: {
        top: "100vh",
        transition: {
            duration: 1.4, // Longer duration
            ease: [0.76, 0, 0.24, 1],
            top: { duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] } // Longer duration and delay
        },
        transitionEnd : {
            top: "100vh"
        }
    },
    exit: {
        top: "-300px",
        transition: {
            duration: 1.4, // Longer duration
            ease: [0.76, 0, 0.24, 1],
            top: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } // Longer duration
        }
    }
}