import HeroSection from "../sections/Home/HeroSection"
import IntroSection from "../sections/Home/IntroSection"
import WorksSection from "../sections/Home/WorksSection"

const Home = () => {
  return (
    <section className="bg-shade-100">
      <HeroSection />
      <IntroSection />
      <WorksSection />
    </section>
  )
}


export default Home