import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Hello, I'm <span className="hero__name">Your Name</span></h1>
        <p className="hero__subtitle">A brief description about yourself or your profession.</p>
        <a href="#contact" className="btn btn--primary">Contact Me</a>
      </div>
    </section>
  )
}

export default Hero