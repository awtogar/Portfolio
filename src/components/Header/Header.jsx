import './header.css'
import { RiSunLine, RiMoonLine } from '@remixicon/react'

const Header = ({ burgerRef, themeToggleRef }) => {

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
  <div className="">

	<div className='header fixed flex w-full justify-between items-center p-3 box-border mix-blend-difference cursor-pointer z-[1]'>
	{/* logo on left*/}
		<div className="items-center justify-center text-2xl p-8 font-bold text-bg-900 antialiased">
			<span>Gar.</span>
		</div>
		{/* burger and theme button*/}
		<div className="flex items-center gap-3">
		{/* Toggle dark and light */}
			<div className="toggle text-bg-900 relative ">
				<button className=''onClick={handleToggleTheme} aria-label="Toggle dark mode" typeof='button' ref={themeToggleRef}>
					<RiSunLine className="inline dark:hidden" size={24} />
					<RiMoonLine className="hidden dark:inline" size={24} />
				</button>
			</div>
			{/* Hamburger menu button */}
			<div className="burger relative flex flex-col gap-2 p-8 pointer-events-none ">
				<div ref={burgerRef} className="bounds"></div>
			</div>
		</div>
	</div>

	<div>
		{/* nav desktop */}
		<nav className="fixed flex gap-8 bg-primary">
			{menus.map((menu) => (
				<a key={menu.name} href={menu.path} className="text-bg-900">
					{menu.name}
				</a>
			))}
		</nav>
		{/* nav mobile */}
	</div>

  </div>
  )
}

export default Header
