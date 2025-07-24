import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

export default function Preloader() {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, 123, { duration: 2 })
        return () => controls.stop()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1, y: "100%" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }}
            exit={{ opacity: 1, y: "100%", transition: { duration: 0.7, ease: "easeIn" } }}
            style={wrapper}
        >
            <motion.pre style={text}>{rounded}</motion.pre>
        </motion.div>
    )
}

const wrapper = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0d0d0d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
}

const text = {
    fontSize: 64,
    color: "#8df0cc",
}
