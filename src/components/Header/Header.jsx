import { RiSunLine, RiMoonLine } from '@remixicon/react'
import { AnimatePresence,motion } from 'framer-motion'
import { useState } from 'react'
import Nav from '../Header/Nav/nav'
import './header.css'

const Header = ({ burgerRef, themeToggleRef , logoElement }) => {
 const [isActive, setIsActive] = useState(false);

	
	const handleToggleTheme = () => {
		document.documentElement.classList.toggle('dark')
	}

	const closeMenu = () => {
		setIsActive(false)
	}



  return (
  <div className='header-wrapper'>
	<div className='header pt-8 fixed flex w-full justify-between items-center mix-blend-difference z-[100]'>
		<div className="items-center pl-4 md:pl-6 text-xl font-bold font-secondary tracking-tighter justify-center md:text-2xl antialiased " ref={logoElement}>
			<a href="/" className='text-canvas dark:text-main cursor-pointer'>Gxr.</a>
		</div>
		{/* button and hamburger */}
		<div className="flex items-center">
			<motion.div 
				className="toggle hidden md:block text-canvas dark:text-main relative p-4 h-[60px]"
				animate={{ 
					opacity: isActive ? 0 : 1,
					pointerEvents: isActive ? 'none' : 'auto'
				}}
				transition={{ 
					opacity: { 
						//hide (0.3s), slow show (1.5s)
						duration: isActive ? 0.3 : 1.5, 
						ease: "easeInOut" 
					}
				}}
			>
				<button className='cursor-pointer ' onClick={handleToggleTheme} aria-label="Toggle dark mode" type='button' ref={themeToggleRef}>
					<RiSunLine className="theme-icon inline dark:hidden" size={24} />
					<RiMoonLine className="theme-icon moon-icon hidden dark:inline" size={24} />
				</button>
			</motion.div>
			<div className={`burger pr-4 relative flex flex-col w-full gap-[0.2rem] md:w-[4.5rem] content-center md:gap-2 md:p-6 md:pointer-events-none cursor-pointer  ${isActive ? 'active' : ''}`} onClick={() => {setIsActive(!isActive)}}>
				<motion.div ref={burgerRef} className="bounds" />
			</div>
		</div>
	</div>
	{/* only show nav when burger active : done */}
	<div className='nav-wrapper'>
		<AnimatePresence mode="wait">
			{isActive && <Nav closeMenu={closeMenu} />}
       </AnimatePresence>
	</div>
</div>
	)
}

export default Header
