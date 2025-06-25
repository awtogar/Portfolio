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

  return (
    <div className='header fixed flex w-full justify-between items-center p-3 box-border mix-blend-difference cursor-pointer z-[1]'>
	  <div className="items-center justify-center text-2xl font-bold text-bg-900 antialiased">
		<span >Gar.</span>
	  </div>
	  <div className="menu">
		<div className="burger">
			<div ref={ref} className="bounds"></div>
		</div>
	  	<div className="Toggle"></div>
	  </div>
    </div>
  )
})

export default Header
