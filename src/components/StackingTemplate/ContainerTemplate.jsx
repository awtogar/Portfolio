import { useRef } from 'react';
import { useScroll } from 'framer-motion';

// This component is used to create a container for sections that will be stacked vertically and animated based on scroll position.
// kalo mau buat section costume duplicate ini aja, ganti nama file dan importnya
import Section1 from './Section1';
import Section2 from './Section2';



const ContainerTemplate = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  return (
 <section ref={container} className="relative h-[200vh] pt-12"> {/* Hero Section main */}
        <Section1 scrollYProgress={scrollYProgress}/>
        <Section2 scrollYProgress={scrollYProgress}/>
      </section>
  )
}

export default ContainerTemplate
