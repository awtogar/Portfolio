import Aboutme from "../sections/Home/Aboutme"
import Hero from "../sections/Home/Hero"


const Home = () => {
  return (
    <main className="min-h-screen bg-bg-900 text-primary font-primary">
      <Hero />
      <Aboutme />
      {/* <MyWork /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </main>
  )
}

export default Home