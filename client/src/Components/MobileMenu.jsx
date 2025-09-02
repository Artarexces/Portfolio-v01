import React, {useRef, useEffect, useState} from 'react'
import gsap from 'gsap'


const MobileMenu = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null)
  const [shouldRender, setShouldRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      gsap.fromTo(menuRef.current, 
        {opacity: 0, y: -30},
        {opacity: 1, y: 0, duration: 0.4, ease: 'power3.out'})
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power3.out',
        onComplete: () => setShouldRender(false),
      })
    }
  }, [isOpen])

  if (!shouldRender) return null

  return (
    <div ref={menuRef} className='absolute top-14 w-[90vw] max-w-2xl bg-black/90 rounded-xl py-6 flex flex-col items-center gap-6 sm:hidden shadow-lg'>
        <a href="#about" onClick={toggleMenu} className='text-white font-bold hover:text-cyan-200 transition'>About me</a>
        <a href="#Skills" onClick={toggleMenu} className='text-white font-bold hover:text-cyan-200 transition'>Skills</a>
        <a href="#projects" onClick={toggleMenu} className='text-white font-bold hover:text-cyan-200 transition'>Projects</a>
        <a href="#contact" onClick={toggleMenu} className='text-white font-bold hover:text-cyan-200 transition'>Contact</a>
    </div>
    
  )
}

export default MobileMenu
