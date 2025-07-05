import React from 'react'
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa"
import todo from "./assets/todo.png"
import portfoliov1 from "./assets/portfoliov1.png"
import foodRecipe from "./assets/foodRecipe.png"

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
        title: "Cocinando tu receta!",
        image: foodRecipe,
        description: "Mi primer app, simple, en la cual puedes elegir alimentos, combinarlos + puntaje nutricional.",
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
                        <h3 className='text-lg font-semibold text-cyan-400 '>{project.title}</h3>
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:brightness-110 transition"
                                title="Ver proyecto"
                            >
                                <FaExternalLinkAlt className="w-5 h-5" />
                            </a>
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:brightness-110 transition"
                                title="Ver código"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>
                        <p className='text-[16px] mt-2 text-center text-gray-400'>{project.description}</p>
                        <div className="flex justify-center gap-4 flex-wrap pt-8 mt-auto">
                            {project.techs.map((techs, i) => (
                                <img key={i} src={techs} className="w-12 h-12 hover:scale-110 transition duration-500 ease-in-out" />
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
