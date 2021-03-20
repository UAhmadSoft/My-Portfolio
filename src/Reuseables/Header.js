import React, { useState } from 'react';
import Brand from '../Components/brand';
import NavMenu from './Navbar';

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 400) setIsScrolled(true);
      else setIsScrolled(false);
   });

   return (
      <header
         className={`z-30 fixed
          w-full top-0 left-0
          animated ${isScrolled ? 'swingOutX' : 'swingInX'}
         `}
         style={{
            backgroundColor: '#54a0ff',
         }}
      >
         <div className='container flex items-center justify-between py-4'>
            <Brand />
            <NavMenu />
         </div>
      </header>
   );
};

export default Header;
