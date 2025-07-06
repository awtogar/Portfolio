import Lenis from "lenis"
import { useEffect, useRef, createContext, useContext } from "react"

// share Lenis instance
const LenisContext = createContext()

export const useLenis = () => {
    const context = useContext(LenisContext)
    if (!context) {
        throw new Error('useLenis must be used within SmoothScrollLenis')
    }
    return context
}

const SmoothScrollLenis = ({ children }) => {
    const wrapperRef = useRef(null)
    const lenisRef = useRef(null)

    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1,
            duration: 1.2,
        })

        lenisRef.current = lenis

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    const stopScroll = () => {
        if (lenisRef.current) {
            lenisRef.current.stop()
        }
    }

    const startScroll = () => {
        if (lenisRef.current) {
            lenisRef.current.start()
        }
    }

    return (
        <LenisContext.Provider value={{ stopScroll, startScroll, lenis: lenisRef.current }}>
            <div ref={wrapperRef} className="scroll-content">
                {children}
            </div>
        </LenisContext.Provider>
    )
}

export default SmoothScrollLenis