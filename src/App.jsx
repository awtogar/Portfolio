import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { useRef } from "react"
import "./styles/globals.css"
import Header from "./components/Header/Header"
import SmoothScrollWrapper from "./components/Scroller/SmoothScrollWrapper"
import StickyCursor from "./components/StickyCursor"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project"

const App = () => {
	const stickyElement = useRef(null)

	return (
		<Router>
			<SmoothScrollWrapper>
				<main className="bg-bg-900">
					<Header ref={stickyElement} />
					<StickyCursor stickyElement={stickyElement} />
					<Routes>
						{/* manggil tampilan berdasarkan id dari elemen pagesnya menggunakan router */}
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<Project />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
			</SmoothScrollWrapper>
		</Router>
	)
}

export default App
