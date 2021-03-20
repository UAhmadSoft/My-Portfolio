import React, { useState } from 'react';
import cls from 'classnames';
import CrossIcon from '../Assets/Icons/cross';
import Hamburger from '../Assets/Icons/hamburger';
import '../Styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
   const [open, setOpen] = useState(false);

   return (
      <nav>
         <button
            onClick={() => setOpen(!open)}
            className='w-auto bg-gray-900 rounded-full p-2 hover:bg-gray-700 transition-colors duration-100 focus-within:outline-none z-50 relative md:hidden'
         >
            {open ? (
               <CrossIcon className="w-8 text-gray-900'" />
            ) : (
               <Hamburger className='w-8 text-white' />
            )}
         </button>

         <div
            className={cls(
               'fixed bg-black top-0 left-0 w-full h-full flex justify-center items-center md:relative md:flex md:bg-transparent z-40',
               { hidden: !open }
            )}
         >
            <section
               onClick={() => setOpen(false)}
               className={`flex flex-col menu md:flex-row md:items-center`}
            >
               <NavLink activeClassName='active' exact to='/'>
                  Home
               </NavLink>
               <NavLink activeClassName='active' to='/about'>
                  About
               </NavLink>
               <NavLink activeClassName='active' to='/work'>
                  Work
               </NavLink>
               <NavLink activeClassName='active' to='/contact'>
                  Contact
               </NavLink>
            </section>
         </div>
      </nav>
   );
};

export default NavMenu;
