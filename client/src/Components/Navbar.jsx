import React, { useState } from 'react'
import MobileMenu from '@/Components/MobileMenu'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        
    <nav className="fixed flex justify-center w-full top-2 z-100">
        <div className="w-[90vw] max-w-2xl sm:w-[80vw] flex justify-center">
            <ul className='hidden sm:flex flex-wrap justify-center items-center w-full bg-black/30 backdrop-blur-sm rounded-full px-10 py-2 gap-19 list-none text-sm sm:text-base md:text-base lg:text-sm xl:text-sm shadow-lg border border-white/10'>
                    <li><a href="#about" className='font-bold hover:text-cyan-200 transition'>About me</a></li>
                    <li><a href="#Skills" className='font-bold hover:text-cyan-200 transition'>Skills</a></li>
                    <li><a href="#projects" className='font-bold hover:text-cyan-200 transition'>Projects</a></li>
                    <li><a href="#contact" className='font-bold hover:text-cyan-200 transition'>Contact</a></li>
                </ul>
            <div className='sm:hidden'>
                <button onClick={toggleMenu} className='text-white'>
                    {isOpen ? 'X' : '☰'}

                </button>
            </div>
        </div>
        {isOpen && <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />}
        </nav>
    )
}

export default Navbar
