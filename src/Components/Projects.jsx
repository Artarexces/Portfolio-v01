import React from 'react'
import portfoliov1 from "./assets/portfoliov1.png"
import foodRecipe from "./assets/foodRecipe.png"

const Projects = () => {
    return (
        <section id='projects' className='projects-container'>
            <h2 className='project-title'>Projects</h2>
            <div className='project-card fade-in'>
                <img src={portfoliov1} alt="Miniatura del projecto" className="project-thumbnail" />
                <h3>Mi Portfolio</h3>
                <p>Este es el portfolio que se esta mostrando actualmente. Un projecto desarollado con React y puro CSS</p>
                <div className='project-tech'>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                </div>
                <div className='project-links'>
                    <a href="#" target='_blank'>Ver projecto</a>
                    <a href="https://github.com/Artarexces/Portfolio-v01" target='_blank'>Ver codigo</a>
                </div>
            </div>

            <div className='project-card fade-in'>
                <img src={foodRecipe} alt="Miniatura del projecto" className="project-thumbnail" />
                <h3>Cocinando tu receta!</h3>
                <p>Una app simple en la cual puedes elegir alimentos y conbinarlos para crear tu propia receta y darle un nombre, tambien da un puntaje nutricional. Este fue uno de mis primeros proyectos en la UTN. </p>
                <div className='project-tech'>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                </div>
                <div className='project-links'>
                    <a href="https://cocinando-tu-receta-omega.vercel.app/" target='_blank'>Ver projecto</a>
                    <a href="https://github.com/Artarexces/CocinandoTuReceta?tab=readme-ov-file" target='_blank'>Ver codigo</a>
                </div>
            </div>
        </section>
    )
}

export default Projects
