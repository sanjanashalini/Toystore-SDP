import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ]
  return (
    <div className="w-full h-[10vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg">
      <div className="flex-shrink-0">
                        <img className="block lg:hidden h-8 w-auto" src="https://i.pinimg.com/236x/fb/4e/21/fb4e21b566efc504afc20c4c8008b1a1.jpg" alt="Logo" />
                        <img className="hidden lg:block h-12" src="https://i.pinimg.com/236x/fb/4e/21/fb4e21b566efc504afc20c4c8008b1a1.jpg" alt="Logo" />
                    </div>
      </div>
      
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar