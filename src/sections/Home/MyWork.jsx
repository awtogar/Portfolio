import { useScroll, useTransform, motion } from 'framer-motion';
import WorkImages from '../../assets/images/img-2.jpg';
import { useRef } from 'react';
import { section } from 'framer-motion/client';

const Text = () => {
    return (
        <div className='flex justify-center my-40  z-10'>
            <p className='text-shade-100 dark:text-shade-800 text-[7.5vw] uppercase text-center max-w-[50vw] leading-none'>Too many chances <br /> that we've spent together </p>
        </div>
    )
}

export default function MyWork() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
        <section>
        <motion.div 
            ref={container} 
            className='relative flex items-center justify-center h-screen overflow-hidden' 
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <Text />
            <div className='fixed top-[-100vh] left-0 h-[300vh] w-full z-0'>
                <motion.div style={{y}} className='relative w-full h-full'>
                    <img 
                        src={WorkImages} 
                        alt="background" 
                        className="h-full object-cover"
                    />
                </motion.div>
            </div>
        </motion.div>
        </section>
    )
}