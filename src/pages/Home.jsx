import HeroSection from "../sections/Home/HeroSection"
import IntroSection from "../sections/Home/IntroSection"
import StackingCards from "../sections/Home/StackingCards"

const Home = () => {
  return (
    <section className="bg-shade-100">
      <HeroSection />
      <IntroSection />
        <StackingCards />
    </section>
  )
}


export default Home