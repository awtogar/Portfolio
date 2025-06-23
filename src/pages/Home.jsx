import Aboutme from "../sections/Home/Aboutme"
import Contact from "../sections/Home/Contact"
import Hero from "../sections/Home/Hero"
import MyWork from "../sections/Home/MyWork"
import Testimonials from "../sections/Home/Testimonials"

const Home = () => {
  return (
    <main className="min-h-screen bg-bg-900 text-primary font-primary">
      <Hero />
      <Aboutme />
      <MyWork />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default Home