// 🧭 Core Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// 🎨 Global Styles
import './styles/index.css'
// 🌀 Utilities / Wrapper Components
import SmoothScrollWrapper from './components/Scroller/SmoothScrollWrapper'
// 🧱 Layout Components
import Header from './components/Header/Header'
// 📄 Pages
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'


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
