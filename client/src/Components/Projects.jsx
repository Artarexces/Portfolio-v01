import React from 'react'
import {FaGithub} from "react-icons/fa"
import { VscVmConnect } from "react-icons/vsc";
import portfoliov1 from "./assets/portfoliov1.png"
import foodRecipe from "./assets/foodRecipe.png"
import todo from "./assets/todo.png"
import cloudy from "./assets/cloudy.jpg"
import pomi from "./assets/pomi.png"

const projectData = [
    {
        title: "Mi portfolio",
        image: portfoliov1,
        description: "Este es el portfolio que se esta mostrando actualmente. Un projecto desarollado con  React.JS, express.js y Tailwind CSS",
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
        description: "Un task-list hecha 100% con python django, utilizando templates HTML y staticos CSS!",
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
        description: "Una app de clima hecha con React.js y Python Django en donde aprendi a utilizar Tailwind CSS y GSAP",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        ],
        demoLink: "#",
        codeLink: "https://github.com/Artarexces/Cloudy"
    },
    {
        title: "Pom's",
        image: pomi,
        description: "Pom's es una app de estudio en la cual utiliza el metodo pomodoro de estudio mediante una interfaz sencilla y regulable por el usuario!",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        ],
        demoLink: "#",
        codeLink: "https://github.com/Artarexces/Pom's"
    },
    {
        title: "Mi portfolio",
        image: portfoliov1,
        description: "Este es el portfolio que se esta mostrando actualmente. Un projecto desarollado con React y puro CSS",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projectData.map((project, index) => (
                    <div className="bg-slate-800  rounded-lg flex flex-grow flex-col justify-between" key={index}>
                        <img src={project.image} alt={`Miniatura de ${project.title}`} className='h-48 w-full rounded-xl blur-[2px] hover:blur-none transition duration-500 ease-in-out object-cover' />
                        <div className="flex flex-col justify-between p-6 flex-1">
                        <div className="flex justify-center gap-6">
                        <h3 className='text-xl font-semibold text-cyan-400 text-center'>{project.title}</h3>
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:brightness-110 hover:scale-110 transition"
                                title="Ver proyecto"
                            >
                                <VscVmConnect className="w-6.5 h-6.5 hover:scale-120 hover:brightness-110 transition duration-500 ease-in-out" />
                            </a>
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:brightness-110 hover:scale-110 transition"
                                title="Ver código"
                            >
                                <FaGithub className="w-7 h-7 hover:scale-110 hover:brightness-120 transition duration-500 ease-in-out" />
                            </a>
                        </div>
                        <p className='text-[16px] mt-2 text-center text-gray-400'>{project.description}</p>
                        <div className="flex justify-center gap-4 flex-wrap pt-8 ">
                            {project.techs.map((techs, i) => (
                                <img key={i} src={techs} className="w-12 h-12 hover:scale-110 hover:brightness-110 transition duration-500 ease-in-out" />
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
