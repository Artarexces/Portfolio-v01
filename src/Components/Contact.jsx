import React, { useState } from 'react'



const copyEmail = () => {
    navigator.clipboard.writeText("martinrodriguezdev96@gmail.com");
    alert("Email copiado en el portapapeles");
};

const API_URL = import.meta.env.VITE_API_URL

const Contact = () => {

    const [formData, setFormData] = useState({
        name: " ",
        email: " ",
        message: " "
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log("Resultado:", result)

            if (response.ok) {
                alert("Mensaje enviado con exito!")
                setFormData({ name: "", email: "", message: "" })
            } else {
                alert(`Error: ${result.error || "Intente nuevamente "}`)
            }


        } catch (error) {
            console.error("Error en el envio datos", error)
            alert("Error en el servidor")
        }
    }

    return (
        <section id='contact' className='contact-container'>
            <h2 className='contact-title'>Contacto</h2>

            <form onSubmit={handleSubmit} className='contact-form'>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name='name' value={formData.name} onChange={handleChange} required />

                <label for="email">Email:</label>
                <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />

                <label for="message">Mensaje:</label>
                <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

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
