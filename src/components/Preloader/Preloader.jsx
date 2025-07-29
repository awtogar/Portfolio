import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {PreloaderFade, PreloaderSlideUp} from "../anim";

const TheWords = [
  "Tell None",
  "Your Skills",
  "But",
  "Show Them",
  "Your Quality.",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === TheWords.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={PreloaderSlideUp}
      initial="initial"
      exit="exit"
      // 3. diatas header. agar bisa menutupi header ketika preloader aktif
      className="fixed inset-0 z-[999] flex items-center justify-center bg-main"
      style={{ height: "100vh", width: "100vw" }}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={PreloaderFade}
            initial="initial"
            animate="enter"
            className="flex items-center text-surface absolute z-10"
          >
            {/* <span className="block w-2.5 h-2.5 rounded-full mr-2 bg-based"></span> */}
            {TheWords[index]}
          </motion.p>
          <svg
            className="absolute top-0 left-0 w-full"
            height={dimension.height + 300}
          >
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className={"fill-main"}
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
