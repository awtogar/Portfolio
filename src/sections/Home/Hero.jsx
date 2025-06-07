import {RiHand} from "@remixicon/react"
import HeroImg from "../../assets/images/home/section/hero.jpeg"
import ArrowIcon from "../../components/etc/ArrowIcon"

const Hero = () => {
	return (
		 <div className=" text-primary bg-bg-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Awaluddin Togar
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
          A passionate Web Developer & Designer building clean, user-friendly websites.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-bg-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-primary">
            I’m a web developer with a background in system information and design.
            I love building sleek, responsive websites using modern tech like React, Tailwind, and GSAP.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-primary">Short description of the project goes here.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-primary">Another short description for the second project.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
		// <section className="">
		// 	<section className="w-full h-screen flex flex-col items-center justify-center bg-bg-900">
		// 		<div className="hero-greeting">
		// 			<p>
		// 				<RiHand className="text-highlight wave-icon" /> Hey! it's me Togar.
		// 			</p>
		// 		</div>
		// 		<div className="hero-main-title">
		// 			<h1 className="hero-section__title">
		// 				<span className="title-line">
		// 					Crafting
		// 					<span className="text-highlight"> purpose</span>
		// 				</span>
		// 				<span className="title-line">
		// 					<span className="text-highlight">driven experiences</span>
		// 				</span>
		// 				<span className="title-line">that inspire &</span>
		// 				<span className="title-line">engage.</span>
		// 			</h1>
		// 		</div>
		// 		<div className="hero-description">
		// 			<div className="hero-line"></div>
		// 			<p className="hero-text">
		// 				I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive
		// 				results and achieve business goals.
		// 			</p>
		// 		</div>

		// 		<div className="hero-footer">
		// 			<div className="hero-footer-content">
		// 				<ul className="social-links">
		// 					<li className="social-link-item">
		// 						<a
		// 							target="_blank"
		// 							className="social-link"
		// 							href="https://www.linkedin.com/in/awaluddintogar/"
		// 							rel="noopener noreferrer">
		// 							LinkedIn
		// 							<span className="arrow-icon">
		// 								<ArrowIcon />
		// 							</span>
		// 						</a>
		// 					</li>
		// 					<li className="social-link-item">
		// 						<a
		// 							target="_blank"
		// 							className="social-link"
		// 							href="https://github.com/awaluddintogar"
		// 							rel="noopener noreferrer">
		// 							GitHub
		// 							<span className="arrow-icon">
		// 								<ArrowIcon />
		// 							</span>
		// 						</a>
		// 					</li>
		// 					<li className="social-link-item">
		// 						<a
		// 							target="_blank"
		// 							className="social-link"
		// 							href="https://www.instagram.com/awaluddintogar/"
		// 							rel="noopener noreferrer">
		// 							Instagram
		// 							<span className="arrow-icon">
		// 								<ArrowIcon />
		// 							</span>
		// 						</a>
		// 					</li>
		// 					<li className="social-link-item">
		// 						<a target="_blank" className="social-link" href="mailto:awaluddintogar@gmail.com" rel="noreferrer">
		// 							Gmail
		// 							<span className="arrow-icon">
		// 								<ArrowIcon />
		// 							</span>
		// 						</a>
		// 					</li>
		// 				</ul>
		// 				<div className="hero-cta">
		// 					<a className="cta-button" href="/about">
		// 						Get in touch
		// 					</a>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</section>
		// </section>
	)
}

export default Hero