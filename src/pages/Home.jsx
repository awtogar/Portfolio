// 🌀 Section for home
import Hero from '../sections/Home/Hero';
import Aboutme from '../sections/Home/Aboutme';
import MyWork from '../sections/Home/MyWork';
import Testimonials from '../sections/Home/Testimonials';
import './pages.css';

const Home = () => {
  return (
    <section id="home" className="Section__pages section--pages-home">
      <Hero />
      {/* <Aboutme />
      <MyWork />
      <Testimonials /> */}
    </section>
  )
}
export default Home