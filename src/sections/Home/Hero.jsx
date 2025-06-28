import React from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import HeroImg from '../../../public/assets/images/hero.jpg'
import { useRef } from 'react';

// notes
// The basics of creating a background image parallax is as follow:
	// Create a container with an overflow hidden
	// Add an image inside of that container taking the full width and height of it
	// Translate the image on scroll

export default function Hero() {
	const container = useRef();
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end start']
	});
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  return (
	<div className='bg-shade-100' >
		<div className="h-screen overflow-hidden" ref={container}>
			<motion.div style={{y}} className="relative h-full">
				<img src={HeroImg} alt="Hero" className='object-cover w-full h-full' />
			</motion.div>
		</div>
	</div>
  )
}
