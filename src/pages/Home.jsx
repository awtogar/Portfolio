import Aboutme from "../sections/Home/Aboutme"
import Hero from "../sections/Home/Hero"
import Mywork from "../sections/Home/Mywork"

const Home = () => {
  return (
    <section className="h-[300svh] bg-shade-100">
      <Hero />
      <Aboutme />
      <Mywork />
      <div className="h-screen"></div>
    </section>
  )
}

export default Home