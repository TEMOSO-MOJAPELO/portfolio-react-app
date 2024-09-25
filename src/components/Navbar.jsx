import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaBitbucket } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/BTMLogo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#160F19] text-gray-300">
        <div>
            <img src={Logo} alt="Logo" style={{width: '80px'}} />
        </div>

        {/* Menu */}
        
            <ul className="hidden md:flex">
                <li> 
                <Link 
                     
                    to="home" 
                    smooth={true} 
                    duration={500} 
                    
                >
                    Home
                </Link>
                </li>
                <li>
                <Link 
                     
                     to="about" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     About
                 </Link>
                </li>
                <li>
                <Link 
                     
                     to="skills" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     Skills
                 </Link>
                </li>
                <li>
                <Link 
                     
                     to="work" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     Work
                 </Link>
                </li>
                <li>
                <Link 
                     
                     to="contact" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     Contact
                 </Link>
                </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        
            <ul className={!nav ? 'hidden': 'absolute top-0 left w-full h-screen bg-[#160F19] flex flex-col justify-center items-center'}>
                <li  className="py-6 text-4xl">
                <Link 
                     onClick={handleClick}
                     to="home" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     Home
                 </Link>
                </li>
                <li className="py-6 text-4xl">
                <Link 
                     onClick={handleClick}
                     to="about" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     About
                 </Link>
                </li>
                <li className="py-6 text-4xl">
                <Link 
                     onClick={handleClick}
                     to="skills" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     Skills
                 </Link> 
                </li>
                <li className="py-6 text-4xl">
                <Link 
                     onClick={handleClick}
                     to="work" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     Work
                 </Link>
                </li>
                <li className="py-6 text-4xl">
                <Link 
                     onClick={handleClick}
                     to="contact" 
                     smooth={true} 
                     duration={500} 
                     
                 >
                     Contact
                 </Link>
                </li>
            </ul>
        

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
           <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '> 
                    <a className='flex justify-between items-center w-full text-grey-300' href="https://www.linkedin.com/in/temoso-mojapelo-807893240/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '> 
                    <a className='flex justify-between items-center w-full text-grey-300' href="https://github.com/TEMOSO-MOJAPELO">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 '> 
                    <a className='flex justify-between items-center w-full text-grey-300' href="/">
                        BitBucket <FaBitbucket size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1c6e44] '> 
                    <a className='flex justify-between items-center w-full text-grey-300' href="https://www.canva.com/design/DAFTht7O05I/FYVPeRlSdr21YxHt7KH5VQ/view?utm_content=DAFTht7O05I&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li> 

           </ul>
        </div>
    </div>
  )
}

export default Navbar