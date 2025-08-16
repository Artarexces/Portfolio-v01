import React from 'react'

const Navbar = () => {
    return (
        
    <nav className="fixed flex justify-center w-full top-2 z-100">
        <div className="w-[90vw] max-w-2xl flex justify-center">
            <ul className='flex flex-wrap justify-center items-center w-full bg-black/30 backdrop-blur-sm rounded-full px-10 py-2 gap-19 list-none text-sm sm:text-base md:text-base lg:text-sm xl:text-sm shadow-lg border border-white/10'>
                    <li><a href="#about" className='font-bold hover:text-cyan-200 transition'>About me</a></li>
                    <li><a href="#Skills" className='font-bold hover:text-cyan-200 transition'>Skills</a></li>
                    <li><a href="#projects" className='font-bold hover:text-cyan-200 transition'>Projects</a></li>
                    <li><a href="#contact" className='font-bold hover:text-cyan-200 transition'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
