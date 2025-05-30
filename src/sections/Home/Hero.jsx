import HeroImg from "../../assets/images/home/section/hero.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import ArrowIcon from "../../components/etc/ArrowIcon"

const Hero = () => {
  return (
    <section>
      <section className="hero-section">
        <div className="hero-greeting">
          <p>
            <FontAwesomeIcon icon={faHand} className="text-highlight wave-icon" /> Hey! it's me Togar.
          </p>
        </div>
        <div className="hero-main-title">
          <h1 className="hero-section__title">
            <span className="title-line">Crafting 
              <span className="text-highlight"> purpose</span>
            </span>
            <span className="title-line">
              <span className="text-highlight">driven experiences</span>
            </span>
            <span className="title-line">
              that inspire &
            </span>
            <span className="title-line">
              engage.
            </span>
          </h1>
        </div>
        <div className="hero-description">
          <div className="hero-line"></div>
          <p className="hero-text">
            I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
          </p>
        </div>

        <div className="hero-footer">
          <div className="hero-footer-content">
            <ul className="social-links">
              <li className="social-link-item">
                <a target="_blank" className="social-link" href="https://www.linkedin.com/in/awaluddintogar/" rel="noopener noreferrer">
                  LinkedIn
                  <span className="arrow-icon">
                    <ArrowIcon />
                  </span>
                </a>
              </li>
              <li className="social-link-item">
                <a
                  target="_blank"
                  className="social-link"
                  href="https://github.com/awaluddintogar"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span className="arrow-icon">
                    <ArrowIcon />
                  </span>
                </a>
              </li>
              <li className="social-link-item">
                <a
                  target="_blank"
                  className="social-link"
                  href="https://www.instagram.com/awaluddintogar/"
                  rel="noopener noreferrer"
                >
                  Instagram
                  <span className="arrow-icon">
                    <ArrowIcon />
                  </span>
                </a>
              </li>
              <li className="social-link-item">
                <a
                  target="_blank"
                  className="social-link"
                  href="mailto:awaluddintogar@gmail.com"
                >
                  Gmail
                  <span className="arrow-icon">
                    <ArrowIcon />
                  </span>
                </a>
              </li>
            </ul>
            <div className="hero-cta">
              <a className="cta-button" href="/about">
              Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;