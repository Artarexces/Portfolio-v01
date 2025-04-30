import { useState, useEffect } from 'react'

const Header = () => {
    const roles = ["Front-end", "Back-end", "Full-stack"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (subIndex < roles[index].length) {
                    setText((prev) => prev + roles[index][subIndex]);
                    setSubIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                if (subIndex > 0) {
                    setText((prev) => prev.slice(0, -1));
                    setSubIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting])

    return (
        <header className='header'>
            <div id='about' className='header-contet'>
                <h1>Hola, soy Martin</h1>
                <h2>Desarollador <span>{text}</span></h2>
                <p className="about-me">
                    Soy un apasionado del desarrollo web con experiencia en HTML, CSS, JavaScript y React. Siempre estoy en busca de mejorar mis habilidades y explorar nuevas tecnologías. Además, tengo un gran interés  en la inteligencia artificial y machine learning, áreas que considero fundamentales en el mundo digital. Disfruto aprendiendo cada día y enfrentando nuevos desafíos.
                </p>
            </div>
        </header>
    )
}

export default Header
