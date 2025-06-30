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
	<div className='header fixed flex w-full justify-between items-center p-3 box-border mix-blend-difference  z-[1000]'>
		<div className="items-center justify-center text-2xl p-6 font-bold antialiased" ref={logoElement}>
			<a href="/" className='text-shade-100 dark:text-shade-800 cursor-pointer'>Gxr.</a>
		</div>
		<div className="flex items-center ">
			<div className="toggle text-shade-100 dark:text-shade-800 relative p-4 h-[60px]">
				<button className='cursor-pointer' onClick={handleToggleTheme} aria-label="Toggle dark mode" type='button' ref={themeToggleRef}>
					<RiSunLine className="theme-icon inline dark:hidden" size={24} />
					<RiMoonLine className="theme-icon moon-icon hidden dark:inline" size={24} />
				</button>
			</div>
			<div 
				className={`burger relative flex flex-col w-[72px] content-center gap-2 p-6 pointer-events-none cursor-pointer ${isActive ? 'active' : ''}`} 
				onClick={() => {setIsActive(!isActive)}}
			>
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
