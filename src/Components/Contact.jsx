import React from 'react'


const copyEmail = () => {
    navigator.clipboard.writeText("martinrodriguezdev96@gmail.com");
    alert("Email copiado en el portapapeles");
};

const handleSubmit = async (e) => {


}

const Contact = () => {
    return (
        <section id='contact' className='contact-container'>
            <h2 className='contact-title'>Contacto</h2>

            <form className='contact-form'>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name='name' required />

                <label for="email">Email:</label>
                <input type="email" id='email' name='email' required />

                <label for="message">Mensaje:</label>
                <textarea name="message" id="message" rows="4" required></textarea>

                <button type='submit' className='submit-btn'>Enviar</button>
            </form>

            <h2 className='contact-redes'>Redes</h2>
            <div className='contact-links'>
                <a href="https://www.linkedin.com/in/martin-rodriguez-a71748342/" target='_blank' rel='noopener noreferer'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                </a>

                <a href="https://github.com/Artarexces" target="_blank" rel="noopener noreferrer">

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />

                </a>

                <div className='email-container'>
                    <button className='copy-email' onClick={copyEmail}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                            alt="Gmail"
                            className="gmail-icon"
                        />

                    </button>
                    <span className='copy-text'>← Copiar email</span>
                </div>
            </div>
        </section>
    )
}

export default Contact
