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
        <header className='mt-40 mb-20 ml-10 md:ml-20'>
            <div id='about'>
                <h1 className='text-4xl font-bold mb-2'>Hola, soy Martin👋</h1>
                <h2 className='text-2xl font-semibold mb-4'>
                    Desarollador{" "} 
                    <span className='text-sky-400'>
                        {text}
                    </span>
                </h2>
                <p className='max-w-xl text-base leading-relaxed text-left'>
                    Soy un entusiasta del desarrollo web con experiencia en HTML, CSS, JavaScript y React como tambien en Python, node.js, typescript, express y manejo de base de datos SQL y NoSql. Siempre estoy en busca de mejorar mis habilidades y explorar nuevas tecnologías.
                </p>
            </div>
        </header>
    )
}

export default Header
