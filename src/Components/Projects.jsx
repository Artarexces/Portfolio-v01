import React from 'react'
import portfoliov1 from "./assets/portfoliov1.png"
import foodRecipe from "./assets/foodRecipe.png"

const projectData = [
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
        title: "Cocinando tu receta!",
        image: foodRecipe,
        description: "Una app simple en la cual puedes elegir alimentos y conbinarlos, tambien da un puntaje nutricional. Uno de mis primeros proyectos en la UTN.",
        techs: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        ],
        demoLink: "https://cocinando-tu-receta-omega.vercel.app/",
        codeLink: "https://github.com/Artarexces/CocinandoTuReceta?tab=readme-ov-file"
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
        <section id='projects' className='projects-container'>
            <h2 className='project-title'>Projects</h2>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div className="project-card fade-in" key={index}>
                        <img src={project.image} alt={`Miniatura de ${project.title}`} className='project-thumbnail' />
                        <h3>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        <div className="project-tech">
                            {project.techs.map((techs, i) => (
                                <img key={i} src={techs} />
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.demoLink}
                                target='_blank'>Ver proyecto</a>
                            <a href={project.codeLink}>Ver codigo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
