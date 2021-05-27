import React from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../Components/brand';

const Footer = () => {
   return (
      <footer className='footer justify-self-start pb-12 pt-16 sm:pt-20 mt-8 sm:mt-10'>
         <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 container'>
            <section className='text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10'>
               <article className='space-y-5'>
                  <h4 className='text-xs font-semibold tracking-wide text-white uppercase'>
                     SOCIAL
                  </h4>
                  <ul className='space-y-4'>
                     <li className='listItem transition-colors duration-200 tracking-tight font-medium'>
                        <a
                           target='_blank'
                           rel='noreferrer'
                           href='https://github.com/UAhmadSoft'
                        >
                           Github
                        </a>
                     </li>
                     <li className='listItem transition-colors duration-200 tracking-tight font-medium'>
                        <a
                           target='_blank'
                           rel='noreferrer'
                           href='https://www.linkedin.com/in/uahmadsoft/'
                        >
                           LinkedIn
                        </a>
                     </li>
                     <li className='listItem transition-colors duration-200 tracking-tight font-medium'>
                        <a
                           target='_blank'
                           rel='noreferrer'
                           href='https://www.facebook.com/AhmadEfendi11/'
                        >
                           Facebook
                        </a>
                     </li>
                  </ul>
               </article>

               <article className='space-y-5'>
                  <h4 className='text-xs font-semibold tracking-wide text-white uppercase'>
                     Legal
                  </h4>
                  <ul className='space-y-4'>
                     <li className='listItem transition-colors duration-200 tracking-tight font-medium'>
                        <NavLink
                           className='block'
                           to='/privacy-policy'
                        >
                           Privacy Policy
                        </NavLink>
                     </li>
                     <li className='listItem transition-colors duration-200 tracking-tight font-medium'>
                        <NavLink to='/'>© 2021, Umad Ahmad</NavLink>
                     </li>
                  </ul>
               </article>
            </section>

            <Brand className='pt-10' />
         </div>
      </footer>
   );
};

export default Footer;
