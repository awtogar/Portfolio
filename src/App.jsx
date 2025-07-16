import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { useRef } from "react"
import "./styles/globals.css"
import Header from "./components/Header/Header"
import SmoothScrollLenis from "./components/Scroller/SmoothScrollLenis"
import StickyCursor from "./components/StickyCursor"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project"

const App = () => {
	const burgerElement = useRef(null)
	const themeToggleElement = useRef(null)
	const logoElement = useRef(null)

	return (
		<Router>
			<SmoothScrollLenis>
				<main className="bg-shade-100">
					<Header burgerRef={burgerElement} themeToggleRef={themeToggleElement} logoElement={logoElement} />
					<StickyCursor stickyElements={[burgerElement, themeToggleElement, logoElement]} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<Project />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
					{/* <Footer /> */}
				</main>
			</SmoothScrollLenis>
		</Router>
	)
}

export default App
