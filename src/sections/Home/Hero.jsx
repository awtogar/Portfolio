import HeroImg from '../../assets/images/home/section/hero.jpeg'

const Hero = () => {
  return (
    <div className="">
    <section className="hero-section">
      <div className="hero-img">
        <img src={HeroImg} alt="Hero" />
      </div>
      <div className="hero-text">
        <p>IF YOU</p>
        <p>STEAL MY WORK</p>
        <p>I’LL TELL MY MOM</p>
      </div>
    </section>
    <section className='about-section'>
      
    </section>
    </div>
  )
}

export default Hero
