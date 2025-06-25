import Aboutme from "../sections/Home/Aboutme"
import Hero from "../sections/Home/Hero"
// import Header from "../components/Header/Header"

const Home = () => {
  return (
    <section className="bg-white">
      <Hero />
      <Aboutme />
    </section>
  )
}

export default Home