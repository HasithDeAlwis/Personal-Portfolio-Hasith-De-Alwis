import {useState} from 'react'
import  {navLinks} from '../constants';

import logo from '../assets/logo.png'
import menu from '../assets/close.svg';
import close from '../assets/menu.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (

    /**Div container that has our navbar */
    <nav className = "w-full flex py-6 justifybetween items-center navbar">

      /**Temporary logo holder */
      <img src={logo} alt = "holder-logo" className = "w-[124px] h-{32px]"/>

      <ul className = "list-none hidden justify-end items-center flex-1 sm:flex ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className ={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      
      <div className = "flex flex-1 justify-end items-center sm:hidden">
          <img src={toggle ? menu : close} alt = "menu" className = "w-[28px] h-[28px] cursor-pointer"
          onClick = {() => setToggle((prev) => !prev)}/>
      </div>

      <div className = {`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className = "list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className ={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index == navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar