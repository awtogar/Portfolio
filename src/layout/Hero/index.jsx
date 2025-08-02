import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import {FirstContainer, SecondContainer} from './Content';
// import { section } from 'framer-motion/client';



const Hero = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  return (
    <section className='Section_Hero'>
      <section ref={container} className="relative h-[200svh]">
        <FirstContainer scrollYProgress={scrollYProgress}/>
        <SecondContainer scrollYProgress={scrollYProgress}/>
      </section>
    </section>
  )
}

export default Hero
