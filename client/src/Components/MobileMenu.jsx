import React from 'react'


const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className='absolute top-14 w-[90vw] max-w-2xl bg-black/90 rounded-xl py-6 flex flex-col items-center gap-6 sm:hidden'
        >
          <a href="#about" onClick={toggleMenu} className='text-white font-bold hover:text-cyan-200 transition'>About me</a>
          <a href="#Skills" onClick={toggleMenu} className='text-white font-bold hover:text-cyan-200 transition'>Skills</a>
          <a href="#projects" onClick={toggleMenu} className='text-white font-bold hover:text-cyan-200 transition'>Projects</a>
          <a href="#contact" onClick={toggleMenu} className='text-white font-bold hover:text-cyan-200 transition'>Contact</a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
