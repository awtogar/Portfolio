import Lenis from "lenis"
import { useEffect, useRef } from "react"
// gsap disini nanti buat styling component pages dan sections
// Uncomment if you need GSAP for animations
// import gsap from 'gsap'

const SmoothScrollWrapper = ({ children }) => {
	const wrapperRef = useRef(null)

	useEffect(() => {
		if (!wrapperRef.current) return
		const lenis = new Lenis({
			wrapper: wrapperRef.current,
			content: wrapperRef.current.firstElementChild,
			smooth: true,
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
		<div ref={wrapperRef} className="scroll-wrapper" style={{ height: "100vh", overflowY: "auto" }}>
			{children}
		</div>
	)
}

export default SmoothScrollWrapper
