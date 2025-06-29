import Lenis from "lenis"
import { useEffect, useRef } from "react"

const SmoothScrollLenis = ({ children }) => {
    const wrapperRef = useRef(null)

    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1,
            duration: 1.2,
        })

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div ref={wrapperRef} className="scroll-content">
            {children}
        </div>
    )
}

export default SmoothScrollLenis