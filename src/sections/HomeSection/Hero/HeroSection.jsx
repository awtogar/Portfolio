import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import {ContentFirst, ContentSecond} from './HeroContent';
import { section } from 'framer-motion/client';



const HeroSection = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  return (
    <section className=''>
      <section ref={container} className="relative h-[200vh]"> {/* Hero Section main */}
        <ContentFirst scrollYProgress={scrollYProgress}/>
        <ContentSecond scrollYProgress={scrollYProgress}/>
      </section>
    </section>
  )
}

export default HeroSection
