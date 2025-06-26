/* eslint-disable no-unused-vars */
import { forwardRef } from 'react'
import './header.css'
import { RiSunLine, RiMoonLine } from '@remixicon/react'

const Header = forwardRef(function Header(props, ref) {

	const menus = [
		{ name: "home", path: "/" },
		{ name: "about", path: "/about"},
		{ name: "project", path: "/project"},
		{ name: "contact", path: "/contact"},
	]
	// Toggle theme handler
	const handleToggleTheme = () => {
		document.documentElement.classList.toggle('dark')
	}

  return (
    <div className='header fixed flex w-full justify-between items-center p-3 box-border mix-blend-difference cursor-pointer z-[1]'>
	{/* logo on left*/}
	  <div className="items-center justify-center text-2xl p-8 font-bold text-bg-900 antialiased">
		<span>Gar.</span>
	  </div>
	  {/* burger and theme button*/}
		<div className="flex items-center gap-3">
		{/* Toggle dark and light */}
			<div className="toggle text-bg-900 relative ">
				<button className=''onClick={handleToggleTheme} aria-label="Toggle dark mode" typeof='button'>
					<RiSunLine className="inline dark:hidden" size={24} />
					<RiMoonLine className="hidden dark:inline" size={24} />
				</button>
			</div>
			{/* Hamburger menu button */}
			<div className="burger relative flex flex-col gap-2 p-8 pointer-events-none ">
				<div ref={ref} className="bounds"></div>
			</div>
		</div>
    </div>
  )
})

export default Header
