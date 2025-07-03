import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-2 p-2 left-1/2 transform -translate-x-1/2 bg-black/80 rounded-full flex justify-center'>
            <ul className='flex gap-5 m-0 p-0 list-none'>
                <li><a href="#about" className='text-white font-bold hover:text-cyan-200 transition'>About me</a></li>
                <li><a href="#Skills" className='text-white font-bold hover:text-cyan-200 transition'>Skills</a></li>
                <li><a href="#projects" className='text-white font-bold hover:text-cyan-200 transition'>Projects</a></li>
                <li><a href="#contact" className='text-white font-bold hover:text-cyan-200 transition'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
