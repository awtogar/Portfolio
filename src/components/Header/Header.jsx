import './header.css'
import { RiSunLine, RiMoonLine } from '@remixicon/react'
import { AnimatePresence,motion } from 'framer-motion'
import { useState } from 'react'
import Nav from '../Header/Nav/nav'

const Header = ({ burgerRef, themeToggleRef , logoElement }) => {
 const [isActive, setIsActive] = useState(false);

	
	const handleToggleTheme = () => {
		document.documentElement.classList.toggle('dark')
	}

	const closeMenu = () => {
		setIsActive(false)
	}



  return (
  <div className="">
	<div className='header pt-6 pl-4 fixed flex w-full justify-between items-center md:p-3 mix-blend-difference z-[1000]'>
		{/* logo */}
		<div className="items-center text-xl font-bold font-secondary tracking-tighter justify-center md:text-2xl md:p-6 antialiased " ref={logoElement}>
			<a href="/" className='text-shade-100 dark:text-shade-800 cursor-pointer'>Gxr.</a>
		</div>
		{/* button and hamburger */}
		<div className="flex items-center">
			<div className="toggle hidden md:block text-shade-100 dark:text-shade-800 relative p-4 h-[60px] ">
				<button className='cursor-pointer ' onClick={handleToggleTheme} aria-label="Toggle dark mode" type='button' ref={themeToggleRef}>
					<RiSunLine className="theme-icon inline dark:hidden" size={24} />
					<RiMoonLine className="theme-icon moon-icon hidden dark:inline" size={24} />
				</button>
			</div>
			<div className={`burger relative flex pr-4 flex-col w-full gap-[0.2rem] md:w-[4.5rem] content-center md:gap-2 md:p-6 md:pointer-events-none cursor-pointer  ${isActive ? 'active' : ''}`} onClick={() => {setIsActive(!isActive)}}>
				<motion.div ref={burgerRef} className="bounds" />
			</div>
		</div>
	</div>
	<div>
		<AnimatePresence mode="wait">
			{isActive && <Nav closeMenu={closeMenu} />}
       </AnimatePresence>
	</div>
</div>
	)
}

export default Header
