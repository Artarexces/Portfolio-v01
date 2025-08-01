import React from 'react'
import { copyEmail } from '../Components/Contact'

const Footer = () => {
    return (
        <footer className='text-center py-4 bg-slate-800 text-slate-400'>
            <p>Contacto <a href="mailto:martinrodriguezdev96@gmail.com" onClick={copyEmail} className='text-sky-400 hover:underline hover:focus:animate-pulse'>martinrodriguezdev96@gmail.com</a></p>
        </footer>
    )
}

export default Footer
