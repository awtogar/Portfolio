// 🌀 Section for home
import Hero from '../sections/Home/Hero';
import Aboutme from '../sections/Home/Aboutme';
import MyWork from '../sections/Home/MyWork';
import Testimonials from '../sections/Home/Testimonials';

const Home = () => {
  return (
    <section id="home" className="section section--home">
      {/* panggil section untuk didalam pages home */}
      <Hero />
      {/* <Aboutme />
      <MyWork />
      <Testimonials /> */}
    </section>
  )
}
export default Home