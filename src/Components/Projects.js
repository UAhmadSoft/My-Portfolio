import React from 'react';
import ProjectCard from './project-card';

const Projects = () => {
   const nodes = [
      {
         title: 'Colors App',
         scope: 'MERN Colors App',
         description:
            'A Clone of Websites like flatuicolors.com and materialuicolors.com ',
         url: 'https://react-colors-project.herokuapp.com/',
         img: 'https://i.imgur.com/9x1F9At.png',
         github:
            'https://github.com/UAhmadSoft/Color-Project-Frontend-React/',
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
         github: 'https://github.com/UAhmadSoft/MERN-Chat-App-React',
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
            'https://github.com/UAhmadSoft/Blogen-App-Node-Express-Js',
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
         url: 'https://mern-chat-app-frontend.herokuapp.com/',
         img: 'http://i.imgur.com/zMlAD5O.png',
         github: 'https://github.com/UAhmadSoft/MERN-Chat-App-React',
         tags: ['React Js', 'CSS 3', 'TailwindCSS', 'UI Design'],
      },
   ];

   return (
      <section className='mt-28 grid grid-cols-1 justify-items-center items-start lg:justify-items-start gap-y-10 md:gap-y-14 md:gap-x-10 md:grid-cols-2 lg:grid-cols-3'>
         {nodes.map((project) => (
            <ProjectCard key={project.id} data={project} />
         ))}
      </section>
   );
};

export default Projects;
