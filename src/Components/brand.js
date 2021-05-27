import React from 'react';
import { NavLink } from 'react-router-dom';

// import image2 from '../Assets/Images/profile.jpg';
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
            style={{
               width: 70,
               height: 70,
            }}
            alt='Umad Ahmad'
            className='rounded-full mr-2'
         />
         <h1
            className='font-bold tracking-tighter text-white'
            style={{
               letterSpacing: 1,
               fontFamily: 'Nunito, sans-serif',
               fontSize: '1.2em',
            }}
         >
            Developer Ahmad
         </h1>
      </NavLink>
   );
};

export default Brand;
