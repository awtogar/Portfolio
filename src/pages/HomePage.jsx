import { useRef } from 'react';
import { services, works } from '../data/data';
import useVideoInView from '../hooks/useVideoInView';
import video1 from '/src/assets/videos/video-1.mp4';
import video2 from '/src/assets/videos/video-2.mp4';

const HomePage = () => {
  const video1Loader = useVideoInView();
  const video2Loader = useVideoInView();

  return (
    <>
      {/* Hero Section */}
      <section className="z-10 section-padding-hero">
        <div className="m-auto w-full lg:max-w-[1408px]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <h1>Graphics and web designer enthusiast</h1>
              <p>I'm a person with a multidisciplinary background in design and development — learning through doing.</p>
            </div>
            <div className="flex items-center gap-s400 py-s200">
              <div className="flex-1">
                <a href="/contact" className="block w-full px-s600 py-s300 bg-primary text-neutral-100 rounded-full text-center hover:bg-primary-muted transition-colors">
                  Get in touch
                </a>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/work"
                  className="inline-block px-s600 py-s300 text-primary border border-primary rounded-full whitespace-nowrap hover:bg-primary hover:text-neutral-100 transition-colors"
                >
                  Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section 1 */}
      <section className="z-10">
        <div className="m-auto w-full">
          <div className="h-[468px] overflow-hidden">
            <video ref={video1Loader} loop muted playsInline className="w-full h-full object-cover" preload="none">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="z-10 section-padding-xy">
        <div className="m-auto w-full">
          <div className="flex flex-col gap-s800">
            <div className="flex flex-col gap-s300">
              <h2>
                BE <span className="text-brand-primary">IMPACTFUL</span>
              </h2>
              <div className="h-[286px] overflow-hidden rounded-lg">
                <video ref={video2Loader} loop muted playsInline className="w-full h-full object-cover" preload="none">
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="flex flex-col gap-s300">
              <p>
                Turning the visions into reality based on <span className="text-brand-tertiary">the use case</span> and concepts resulting brand stories.
              </p>
              <div className="flex flex-wrap gap-s200">
                {Array.from(new Set(services.flatMap(service => service.tags))).map((tag, index) => (
                  <div key={index} className="tags">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Works Section */}
      <section className="z-10 section-padding-xy bg-primary text-brand-secondary rounded-t-lg">
        <div className="m-auto w-full">
          {/* Services Header */}
          <div className="flex flex-col rounded-t-lg">
            <div className="flex w-full flex-col gap-s400">
              <h2>
                HOW CAN I <br />
                HELP YOU?
              </h2>
              <div className="text-brand-secondary/80">
                <div className="flex flex-col gap-s200">
                  <div>
                    <span>(SERVICES)</span>
                  </div>
                  <p>As a graphic designer and web developer, I can help you create stunning visuals and seamless user experiences.</p>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="w-full m-auto">
              <div className="mt-s900 gap-y-s800 flex flex-col justify-between">
                {services.map((service, index) => {
                  const topValue = `calc(10vh + ${index * 4.75}em)`;
                  const marginBottomValue = `${16 - index * 5}em`;
                  return (
                    <div key={index} className="sticky top-0 border-t border-t-neutral-100/40 bg-primary pt-s300" style={{ top: topValue, marginBottom: marginBottomValue }}>
                      {/* Service Header */}
                      <div className="flex items-center text-left font-semibold gap-s200">
                        <span className="py-s100 font-mono text-h400">({service.number})</span>
                        <h3 className="capitalize">{service.title}</h3>
                      </div>

                      {/* Service Content */}
                      <div className="text-brand-secondary/80 pt-s400">
                        <p>{service.description}</p>
                        <div className="flex flex-col pt-s200">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center mt-s200 gap-s200">
                              <span className="font-mono text-base-sm">({feature.number})</span>
                              <span className="text-base-sm">{feature.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Works Section */}
          <div className="flex flex-col space-300">
            <div className="flex w-full flex-col gap-s400">
              <h2>
                SELECTED <br />
                WORKS
              </h2>
              <p className="text-brand-secondary/80 text-base-sm pt-s200">A showcase of my recent projects and collaborations.</p>
            </div>

            {/* Works List */}
            <div className="flex flex-col gap-s800">
              {works.map((work, index) => (
                <div key={index} className="space-300">
                  <div className="flex flex-col gap-s300">
                    <div className="h-[368px] overflow-hidden rounded-lg pt-s600 pb-s200">
                      <img src={work.image} alt={work.title} className="w-full h-full object-cover hover:scale-102 transition-transform duration-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3>{work.title}</h3>
                      <div className="pt-s200 text-base-sm">
                        <span>
                          {work.date.month} - {work.date.year}
                        </span>
                      </div>
                    </div>
                    <div className="text-brand-secondary/80">
                      <p className="text-brand-secondary/80">{work.description}</p>
                      <div className="flex flex-wrap gap-s200 pt-s400">
                        {work.tags.map((tag, tagIndex) => (
                          <div key={tagIndex} className="tags-secondary">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
     <section className="bg-neutral-900 text-white">
        <div className="m-auto w-full">
          {/* CTA Contact Form Section - Full Screen */}
          <div className="h-screen flex flex-col items-center justify-center p-s600 relative">
            <div className="w-full max-w-2xl mx-auto">
              <div className="text-center mb-s800">
                <p className="text-base-sm text-neutral-400 mb-s200 font-mono tracking-wider">LET'S WORK TOGETHER</p>
                <h2 className="text-h100 mb-s400 leading-tight">
                  HAVE A PROJECT <br />
                  <span className="text-brand-primary">IN MIND?</span>
                </h2>
                <p className="text-base text-neutral-300 max-w-md mx-auto">
                  Tell me about your project and let's create something extraordinary together.
                </p>
              </div>

              <form className="space-y-s600">
                <div className="grid md:grid-cols-2 gap-s600">
                  <div>
                    <label className="block text-base-sm text-neutral-400 mb-s200 font-mono">NAME*</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-neutral-600 py-s300 text-white placeholder-neutral-500 focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-base-sm text-neutral-400 mb-s200 font-mono">EMAIL*</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-neutral-600 py-s300 text-white placeholder-neutral-500 focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-base-sm text-neutral-400 mb-s200 font-mono">BUDGET RANGE</label>
                  <select className="w-full bg-transparent border-b border-neutral-600 py-s300 text-white focus:border-brand-primary focus:outline-none transition-colors">
                    <option value="" className="bg-neutral-900">Select budget range</option>
                    <option value="5k-10k" className="bg-neutral-900">$5k - $10k</option>
                    <option value="10k-25k" className="bg-neutral-900">$10k - $25k</option>
                    <option value="25k-50k" className="bg-neutral-900">$25k - $50k</option>
                    <option value="50k+" className="bg-neutral-900">$50k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-base-sm text-neutral-400 mb-s200 font-mono">MESSAGE*</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-transparent border-b border-neutral-600 py-s300 text-white placeholder-neutral-500 focus:border-brand-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <div className="pt-s400">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto bg-brand-primary text-white px-s800 py-s400 rounded-full hover:bg-brand-primary/90 transition-colors text-base-sm font-medium tracking-wider"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>

              <div className="mt-s800 pt-s600 border-t border-neutral-800 text-center">
                <p className="text-base-sm text-neutral-400 mb-s300">OR REACH OUT DIRECTLY</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-s400">
                  <a 
                    href="mailto:hello@agar.com" 
                    className="text-white hover:text-brand-primary transition-colors font-mono"
                  >
                    hello@agar.com
                  </a>
                  <span className="hidden sm:block text-neutral-600">•</span>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-primary transition-colors font-mono"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section - Half Screen */}
          <div className="h-[50dvh] bg-neutral-950 flex items-center relative">
            <div className="w-full px-s600">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-s800 items-start">
                  
                  {/* Brand/Logo Section */}
                  <div className="md:col-span-1">
                    <h3 className="text-h400 font-bold mb-s300">AGAR</h3>
                    <p className="text-base-sm text-neutral-400 max-w-xs">
                      Crafting digital experiences through thoughtful design and development.
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="grid grid-cols-2 gap-s600 md:col-span-1">
                    <div>
                      <h4 className="text-base-sm font-mono text-neutral-400 mb-s400 tracking-wider">NAVIGATE</h4>
                      <nav>
                        <ul className="space-y-s200">
                          <li>
                            <a href="/" className="text-white hover:text-brand-primary transition-colors text-base-sm">
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="/work" className="text-white hover:text-brand-primary transition-colors text-base-sm">
                              Work
                            </a>
                          </li>
                          <li>
                            <a href="/about" className="text-white hover:text-brand-primary transition-colors text-base-sm">
                              About
                            </a>
                          </li>
                          <li>
                            <a href="/contact" className="text-white hover:text-brand-primary transition-colors text-base-sm">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div>
                      <h4 className="text-base-sm font-mono text-neutral-400 mb-s400 tracking-wider">CONNECT</h4>
                      <ul className="space-y-s200">
                        <li>
                          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-primary transition-colors text-base-sm">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-primary transition-colors text-base-sm">
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-primary transition-colors text-base-sm">
                            Behance
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-primary transition-colors text-base-sm">
                            GitHub
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Contact Info & Copyright */}
                  <div className="md:col-span-1 text-right">
                    <div className="mb-s600">
                      <p className="text-base-sm font-mono text-neutral-400 mb-s200 tracking-wider">LOCATION</p>
                      <p className="text-base-sm text-white">
                        Depok, West Java<br />
                        Indonesia
                      </p>
                    </div>
                    
                    <div className="mb-s600">
                      <p className="text-base-sm font-mono text-neutral-400 mb-s200 tracking-wider">LOCAL TIME</p>
                      <p className="text-base-sm text-white font-mono">
                        {new Date().toLocaleTimeString('en-US', { 
                          timeZone: 'Asia/Jakarta',
                          hour12: false,
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit'
                        })} WIB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-s800 pt-s400 border-t border-neutral-800">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-s300">
                    <p className="text-base-sm text-neutral-500 font-mono">
                      © 2025 Awtogar. All rights reserved.
                    </p>
                    <div className="flex items-center gap-s400">
                      <a href="/privacy" className="text-base-sm text-neutral-500 hover:text-white transition-colors">
                        Privacy
                      </a>
                      <span className="text-neutral-700">•</span>
                      <a href="/terms" className="text-base-sm text-neutral-500 hover:text-white transition-colors">
                        Terms
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
