import Aboutme from "../sections/Home/Aboutme"
import Hero from "../sections/Home/Hero"
import Works from "../sections/Home/Works"
import Speciality from "../sections/Home/Speciality"

const Home = () => {
  return (
    <section className="bg-shade-100">
      <Hero />
      <Aboutme />
      <Works />
      <Speciality />
      <div className="h-screen"></div>
    </section>
  )
}


export default Home