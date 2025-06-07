import Aboutme from "../sections/Home/Aboutme"
// 🌀 Section for home
import Hero from "../sections/Home/Hero"
import MyWork from "../sections/Home/MyWork"
import Testimonials from "../sections/Home/Testimonials"

const Home = () => {
	return (
		<section
			id="home" className="flex flex-col items-center gap-2 md:gap-6 w-full md:h-full md:pt-12 md:pb-12 md:pl-12 md:pr-12 bg-bg-900">
			<Hero />
			{/* <Aboutme />
      <MyWork />
      <Testimonials /> */}
		</section>
	)
}
export default Home
