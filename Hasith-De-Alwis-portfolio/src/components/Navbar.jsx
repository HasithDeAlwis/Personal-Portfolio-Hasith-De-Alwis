import {useState} from 'react'
import  {navLinks} from '../constants';
import { Link } from 'react-router-dom';

import styles from '../styles';
import logo from '../assets/logo.png'
import menu from '../assets/close.svg';
import close from '../assets/menu.svg';



const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <div className = {`${styles.paddingX} bg-secondary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/**Div container that has our navbar */}
        <nav className = "w-full flex py-6 justifybetween items-center navbar">

        {/**Temporary logo that shows on all screen sizes */}
        <img src={logo} alt = "holder-logo" className = "w-[124px] h-{32px]"/>

        {/**If a screen is bigger than the minimum display the items in a row */}
        <ul className = "list-none hidden justify-end items-center flex-1 sm:flex ">

          {/**Map through the links that were configrued in the constant page */}
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className ={`hover:text-queenBlue font-poppins font-normal cursor-pointer text-[16px] primarytext ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              <Link to={`/${nav.id}`}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/**If on a small screen, display the menu logo */}
        <div className = "flex flex-1 justify-end items-center sm:hidden">
            <img src={toggle ? menu : close} alt = "menu" className = {toggle ? "w-[35px] h-[35px] cursor-pointer" : "w-[28px] h-[28px]"}
            onClick = {() => setToggle((prev) => !prev)}/>
        </div>

        {/**Add a navbar that will pop up */}
        <div className = {`${toggle ? 'flex' : 'hidden'} p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          {/**Map through the links in navLinks */}
          <ul className = "list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className ={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-queenBlue ${index == navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </nav>
      </div>
      
    </div>
    
  )
}

export default Navbar