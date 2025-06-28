import './header.css'
import { RiSunLine, RiMoonLine } from '@remixicon/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Header = ({ burgerRef, themeToggleRef , logoElement }) => {
 const [isActive, setIsActive] = useState(false);
	const menus = [
		{ name: "home", path: "/" },
		{ name: "about", path: "/about"},
		{ name: "project", path: "/project"},
		{ name: "contact", path: "/contact"},
	]
	
	const handleToggleTheme = () => {
		document.documentElement.classList.toggle('dark')
	}



  return (
  <div className="">
	<div className='header fixed flex w-full justify-between items-center p-3 box-border mix-blend-difference  z-[100]'>
		<div className="items-center justify-center text-2xl p-6 font-bold antialiased" ref={logoElement}>
			<span className='text-shade-100 dark:text-shade-800 cursor-pointer'>Gxr.</span>
		</div>
		<div className="flex items-center ">
			<div className="toggle text-shade-100 dark:text-shade-800 relative p-4 h-[60px]">
				<button className='cursor-pointer' onClick={handleToggleTheme} aria-label="Toggle dark mode" type='button' ref={themeToggleRef}>
					<RiSunLine className="theme-icon inline dark:hidden" size={24} />
					<RiMoonLine className="theme-icon moon-icon hidden dark:inline" size={24} />
				</button>
			</div>
			<div className={`burger relative flex flex-col w-[72px] content-center gap-2 p-6 pointer-events-none cursor-pointer ${isActive ? 'active' : ''}`} onClick={() => {setIsActive(!isActive)}}>
				<motion.div ref={burgerRef} className="bounds" />
			</div>
		</div>
	</div>
	<div>
		<nav className="fixed gap-8 bg-shade-800">
			{menus.map((menu) => (
				<a key={menu.name} href={menu.path} className="text-shade-100">
					{menu.name}
				</a>
			))}
		</nav>
	</div>
</div>
	)
}

export default Header
