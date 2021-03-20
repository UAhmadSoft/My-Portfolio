import { withStyles } from '@material-ui/styles';
import React from 'react';
import {
   FaLinkedin,
   FaGithub,
   FaFacebook,
   FaEnvelope,
} from 'react-icons/fa';

const Styles = {
   fbSvg: {
      '& path': {
         color: '#0676E8',
      },
   },
   linkedInSvg: {
      '& path': {
         color: '#0A66C2',
      },
   },
};

const SocialList = ({ classes }) => {
   return (
      <div className='py-3 sm:py-5 md:pt-6 md:pb-12 max-w-3xl'>
         <ul
            className='grid gap-8'
            style={{
               gridTemplateColumns:
                  'repeat(auto-fit, minmax(280px, 1fr))',
            }}
         >
            <li>
               <a
                  className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-purple-400'
                  href='mailto:u.ahmadnode@gmail.com'
               >
                  <div className='grid grid-flow-col auto-cols-max gap-x-3'>
                     <div className='text-3xl bg-purple-100 text-purple-500 rounded-full p-3'>
                        <FaEnvelope />
                     </div>
                     <div className='flex flex-col justify-center font-bold'>
                        <h2 className='text-xl font-bold tracking-tight'>
                           Email
                        </h2>
                        Send me an email →
                     </div>
                  </div>
               </a>
            </li>

            <li>
               <a
                  className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-gray-500'
                  href='https://github.com/UAhmadSoft'
                  target='_blank'
                  rel='noreferrer'
               >
                  <div className='grid grid-flow-col auto-cols-max gap-x-3'>
                     <div className='text-3xl bg-gray-100 text-gray-500 rounded-full p-3'>
                        <FaGithub />
                     </div>
                     <div className='flex flex-col justify-center font-bold'>
                        <h2 className='text-xl font-bold tracking-tight'>
                           GitHub
                        </h2>
                        Profile on GitHub →
                     </div>
                  </div>
               </a>
            </li>

            <li>
               <a
                  className='p-6 border rounded-2xl bg-[#0A66C2] border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 '
                  href='https://www.linkedin.com/in/umad-ahmad-653319184/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ backgroundColor: '#0A66C2' }}
               >
                  <div className='grid grid-flow-col auto-cols-max gap-x-3'>
                     <div
                        style={{ backgroundColor: '#DBEAFE' }}
                        className='text-3xl bg-blue-100 text-[#0A66C2] rounded-full p-3'
                     >
                        <FaLinkedin className={classes.linkedInSvg} />
                     </div>
                     <div className='flex flex-col justify-center  font-bold'>
                        <h2 className='text-xl font-bold tracking-tight'>
                           LinkedIn
                        </h2>
                        Connect with me →
                     </div>
                  </div>
               </a>
            </li>

            <li>
               <a
                  className='p-6 border rounded-2xl bg-[#0676E8] border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 '
                  href='https://www.facebook.com/AhmadEfendi11/'
                  target='_blank'
                  rel='noreferrer'
                  style={{
                     backgroundColor: '#0676E8',
                  }}
               >
                  <div className='grid grid-flow-col auto-cols-max gap-x-3'>
                     <div
                        style={{
                           backgroundColor: '#DBEAFE',
                        }}
                        className='text-3xl bg-blue-100 text-[#0676E8] rounded-full p-3'
                     >
                        <FaFacebook className={classes.fbSvg} />
                     </div>
                     <div className='flex flex-col justify-center  font-bold'>
                        <h2 className='text-xl font-bold tracking-tight'>
                           Facebook
                        </h2>
                        Connect with me →
                     </div>
                  </div>
               </a>
            </li>
         </ul>
      </div>
   );
};

export default withStyles(Styles)(SocialList);
