import React, { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { useScroll, useTransform, motion } from 'framer-motion'
import HeroImg from "../../assets/images/home/section/hero.jpeg"

const Hero = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

    return (
        <div ref={container} className='h-screen overflow-hidden'>
            <motion.div style={{y}} className='relative h-full'>
				{/* img ini diganti dengan div yang widh dan high nya full dan object cover tapi versi div. didalamnya ada hero clas */}
                <img 
                    src={HeroImg} 
                    alt="hero background" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
    )
}

export default Hero