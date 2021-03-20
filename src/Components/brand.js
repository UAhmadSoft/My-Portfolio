import React from 'react';
import { NavLink } from 'react-router-dom';

import image2 from '../Assets/Images/image.jpg';

const Brand = ({ className }) => {
   return (
      <NavLink
         aria-label='Go to homepage'
         className={'flex items-center ' + className}
         to='/'
      >
         <img
            placeholder='blurred'
            src={image2}
            width={48}
            alt='Umad Ahmad'
            className='rounded-full mr-2'
         />
         <span className='text-gray-900 font-bold tracking-tighter'>
            Developer Ahmad
         </span>
      </NavLink>
   );
};

export default Brand;
