import Aboutme from "../sections/Home/Aboutme"
// 🌀 Section for home
import Hero from "../sections/Home/Hero"
import MyWork from "../sections/Home/MyWork"
import Testimonials from "../sections/Home/Testimonials"

const Home = () => {
	return (
		<section
			id="home"
			className="lg:flex lg:flex-col lg:items-center lg:gap-6 lg:w-full lg:h-full lg:pt-12 lg:pb-12 lg:pl-12 lg:pr-12">
			<Hero />
			{/* <Aboutme />
      <MyWork />
      <Testimonials /> */}
		</section>
	)
}
export default Home
