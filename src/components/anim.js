
export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
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

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}

export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

export const PreloaderFade = {
  initial: { opacity: 0 },
  enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
};

export const PreloaderSlideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};