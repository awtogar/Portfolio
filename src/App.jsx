import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
// 🎨 Global Styles
import "./styles/globals.css"
// 🧱 Layout Components
import Header from "./components/Header/Header"
// 🌀 Utilities
import SmoothScrollWrapper from "./components/Scroller/SmoothScrollWrapper"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project"

const App = () => {
	return (
		<Router>
			<SmoothScrollWrapper>
				<Header />
				<main>
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
