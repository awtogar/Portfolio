import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import {SectionFirst, SectionSecond} from './Sections';
import { section } from 'framer-motion/client';



const HeroSection = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  return (
    <section className=''>
      <section ref={container} className="relative h-[200vh] pt-12"> {/* Hero Section main */}
        <SectionFirst scrollYProgress={scrollYProgress}/>
        <SectionSecond scrollYProgress={scrollYProgress}/>
      </section>
    </section>
  )
}

export default HeroSection
