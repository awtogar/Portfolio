import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { useRef } from "react"
import "./styles/globals.css"
import Header from "./components/Header/Header"
import SmoothScrollLenis from "./components/Scroller/SmoothScrollLenis"
import StickyCursor from "./components/StickyCursor"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"
import ContactPage from "./pages/ContactPage"

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
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/work" element={<ProjectPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
					{/* <Footer /> */}
				</main>
			</SmoothScrollLenis>
		</Router>
	)
}

export default App
