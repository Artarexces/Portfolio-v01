import React from 'react'
import {FaGithub} from "react-icons/fa"
import { VscVmConnect } from "react-icons/vsc";
import portfoliov1 from "./assets/portfoliov1.png"
import portfoliov2 from "./assets/portfoliov2.png"
import foodRecipe from "./assets/foodRecipe.png"
import todo from "./assets/todo.png"
import cloudy from "./assets/cloudy.jpg"
import pomi from "./assets/pomi.png"

const projectData = [
    {
        title: "Mi portfolio",
        image: portfoliov2,
        description: "Este es el portfolio mostrado actualmente. Un projecto en desarrollo con React.JS, express.js y Tailwind CSS.",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        ],
        demoLink: "#",
        codeLink: "https://github.com/Artarexces/Portfolio-v01"
    },
    {
        title: "Tu receta!",
        image: foodRecipe,
        description: "Mi primer app, simple, en la cual puedes elegir alimentos, combinarlos tambien da un puntaje nutricional.",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        ],
        demoLink: "https://cocinando-tu-receta-omega.vercel.app/",
        codeLink: "https://github.com/Artarexces/CocinandoTuReceta?tab=readme-ov-file"
    },
    {
        title: "To-Do-Now",
        image: todo,
        description: "Un task-list hecha 100% con python django, utilizando templates HTML y staticos CSS.",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        ],
        demoLink: "https://artarexces.pythonanywhere.com",
        codeLink: "https://github.com/Artarexces/ToDoNow"
    },
    {
        title: "Cloudy",
        image: cloudy,
        description: "Una app de clima hecha con React.js y express en donde aprendi a utilizar Tailwind CSS y GSAP.",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        ],
        demoLink: "#",
        codeLink: "https://github.com/Artarexces/Cloudy"
    },
    {
        title: "Pom's",
        image: pomi,
        description: "Una app de estudio en la cual utiliza el metodo pomodoro mediante una interfaz sencilla, tambien version app-mobile.",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        ],
        demoLink: "https://pom-s.vercel.app/",
        codeLink: "https://github.com/Artarexces/Pom's"
    },
    {
        title: "Mi portfolio",
        image: portfoliov1,
        description: "Este es el portfolio que se esta mostrando actualmente. Un projecto desarollado con React y puro CSS.",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        ],
        demoLink: "#",
        codeLink: "https://github.com/Artarexces/Portfolio-v01"
    }
]

const Projects = () => {
    return (
        <section id='projects' className='px-4 py-20'>
        <h2 className='text-3xl font-bold text-center mb-10'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {projectData.map((project, index) => (
            <div
              key={index}
              className='bg-slate-800 rounded-lg flex flex-col justify-between max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-4 min-h-60 hover:scale-105 transition-all duration-500 ease-in-out'
            >
              <img
                onClick={() => window.open(project.demoLink, '_blank')}
                src={project.image}
                alt={`Miniatura de ${project.title}`}
                className='h-40 md:h-48 w-full rounded-t-lg cursor-pointer blur-[2px] hover:blur-none object-cover transition-all duration-500 ease-in-out'
              />
              <div className='p-4 md:p-6 flex flex-col justify-between flex-1'>
                <div className='flex justify-center items-center gap-4'>
                  <h3 className='text-xl font-semibold pointer-events-none text-cyan-400 text-center mb-2'>
                    {project.title}
                  </h3>
                  <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Ver proyecto'
                    className='hover:scale-110 transition'
                  >
                    <VscVmConnect className='w-6 h-6 mb-2' />
                  </a>
                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Ver código'
                    className='hover:scale-110 transition'
                  >
                    <FaGithub className='w-6 h-6 mb-2' />
                  </a>
                </div>
                <p className='text-sm text-center text-gray-400 mb-5'>
                  {project.description}
                </p>
                <div className='flex justify-center flex-wrap gap-3'>
                  {project.techs.map((tech, i) => (
                    <img
                      key={i}
                      src={tech}
                      className='w-10 h-10 hover:scale-110 transition duration-300'
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Projects
