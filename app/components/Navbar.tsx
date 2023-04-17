'use client'
import { useState } from 'react'
import Link from 'next/link'
import { navbarLinks } from '@/data'
import Logo from '../images/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-transparent">
      <div className="flex w-w60 mx-auto items-center font-medium">
        {/* image (logo) container */}
        <div className="z-50 p-3 w-full flex items-center justify-between">
          <img src={Logo} alt="Logo" className="left-1 md:cursor-pointer h-9" />
          {/* open and close icons */}
          <div className="text-xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {/* displaying the buttons conditionally */}
            {isOpen ? <GrClose /> : <RxHamburgerMenu />}
          </div>
        </div>
        {/* links container */}
        <ul className="md:flex hidden items-center gap-8 ">
          {/* redering the nav links using the map method on the navbarLinks object */}
          {navbarLinks.map((link) => {
            const { label, href } = link
            return (
              <li key={label}>
                <Link href={href} className="py-7 px-3 inline-block">
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* mobile nav */}

      <ul
        className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-8 duration-500 ${
          isOpen ? 'left-0' : 'left-[-100%]'
        }`}
      >
        {/* redering the nav links using the map method on the navbarLinks object */}
        {navbarLinks.map((link) => {
          const { label, href } = link
          return (
            <li key={label}>
              <Link href={href} className="py-7 px-3 inline-block">
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
