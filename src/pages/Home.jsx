import Aboutme from "../sections/Home/Aboutme"
import Hero from "../sections/Home/Hero"

const Home = () => {
  return (
    <section className="h-[300svh]">
      <Hero />
      <Aboutme />
    </section>
  )
}

export default Home