import React from 'react'

const Navbar = () => {
    return (
      <nav className="fixed flex justify-center w-full top-2 left-1/2 transform -translate-x-1/2 z-50">
            <ul className='flex flex-wrap justify-center items-center bg-black/80 backdrop-blur-sm rounded-full px-6 py-1 gap-4 list-none text-sm sm:text-base md:text-base lg:text-sm xl:text-sm'>
                <li><a href="#about" className='font-bold hover:text-cyan-200 transition'>About me</a></li>
                <li><a href="#Skills" className='font-bold hover:text-cyan-200 transition'>Skills</a></li>
                <li><a href="#projects" className='font-bold hover:text-cyan-200 transition'>Projects</a></li>
                <li><a href="#contact" className='font-bold hover:text-cyan-200 transition'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
