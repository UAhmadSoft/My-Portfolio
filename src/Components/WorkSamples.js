import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectCard from './project-card/index';

const WorkSamples = () => {
   const nodes = [
      {
         title: 'Colors App',
         scope: 'MERN Colors App',
         description:
            'A Clone of Websites like flatuicolors.com and materialuicolors.com ',
         url: 'https://react-colors-project.herokuapp.com/',
         img: 'https://i.imgur.com/9x1F9At.png',
         github:
            'https://github1s.com/UAhmadSoft/Color-Project-Frontend-React/',
         tags: [
            'React Js',
            'Node Js',
            'Material UI',
            'chroma-js',
            'Route Transitions',
            'Drag and Drop Components',
            'Emoji Picker',
         ],
      },
      {
         title: 'Chat App',
         scope: 'MERN Chat App',
         description:
            'A Real-time text messaging App built on MERN Stack',
         url: 'https://mern-chat-app-frontend.herokuapp.com/',
         img: 'https://i.ibb.co/0cft435/Screenshot-75.png',
         github: 'https://github1s.com/UAhmadSoft/MERN-Chat-App-React',
         tags: [
            'React Js',
            'Node Js',
            'Material UI',
            'Socket.io',
            'react-toastify',
         ],
      },
      {
         title: 'Blogen App',
         scope: 'Node Js Blogen App',
         description: `A BlogSpot type App build on Node Js using ejs templates with bootstrap 4. Uses many Node Js 
            Features like 
            Authentication by JWT,
Aggregation pipiline,
Filtering results using query strings,
Image uploading by using Multer,
Error handling,
Server-side rendering by ejs templates,
Flash messages,
Real-time comments/likes using Socket.io,
and Many more`,
         url: 'https://blogen-app.herokuapp.com/',
         img: 'https://i.ibb.co/64zfJJV/Screenshot-52.png',
         github:
            'https://github1s.com/UAhmadSoft/Blogen-App-Node-Express-Js',
         tags: [
            'Node Js',
            'Bootstrap 4',
            'Express Js',
            'ejs',
            'JWT',
            'Error Handling',
            'Socket Io',
         ],
      },
      {
         title: 'Portfolio Site',
         scope: 'My Portfolio Site',
         description: `This is my personal website. I created it to showcase my projects, to introduce me to people, and to provide them a way to contact me. I designed and built it myself(I'm learning design so this is kind of a big deal for me 😊 )`,
         url: 'https://ahmadportfolio1.netlify.app',
         img: 'http://i.imgur.com/zMlAD5O.png',
         github: 'https://github1s.com/UAhmadSoft/My-Portfolio',
         tags: ['React Js', 'CSS 3', 'TailwindCSS', 'UI Design'],
      },
   ];

   return (
      <section className='mb-20 sm:mb-10 container section-margin-top text-white'>
         <article className='text-center'>
            <h3 className='text-3xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-white tracking-tight mb-4'>
               Work samples
            </h3>
            <div className='font-medium sm:font-semibold'>
               <NavLink className='underline-effect' to='/work'>
                  Go to work page to see more of my work.
               </NavLink>
            </div>
         </article>

         <section className='mt-16 sm:mt-24 grid grid-cols-1 items-start justify-items-center gap-y-14 md:gap-x-14 md:grid-cols-2 lg:grid-cols-3'>
            {nodes.map((project) => {
               return <ProjectCard key={project.id} data={project} />;
            })}
         </section>
      </section>
   );
};

export default WorkSamples;
