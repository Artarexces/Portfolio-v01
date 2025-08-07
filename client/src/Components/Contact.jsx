import React, { useState } from 'react'

const API_URL = `${import.meta.env.VITE_API_URL}/contacto`;


export const copyEmail = () => {
    navigator.clipboard.writeText("martinrodriguezdev96@gmail.com");
    alert("Email copiado en el portapapeles");
};


const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
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
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
        <section id='contact' className='px-4 py-16'>
            <h2 className='text-3xl font-bold text-center mb-10'>Contacto</h2>
            <div className='max-w-xl mx-auto bg-slate-800 p-6 rounded-lg'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <label htmlFor="name">Nombre:</label>
                <input 
                  type="text" 
                  id="name" 
                  name='name' 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                className='w-full py-2 px-4 border border-slate-700 rounded-md text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:animate-pulse' 
                />

                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id='email' 
                  name='email' 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                className='w-full py-2 px-4 border border-slate-700 rounded-md text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:animate-pulse' 
                />

                <label htmlFor="message">Mensaje:</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                className='w-full py-2 px-4 border border-slate-700 rounded-md text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:animate-pulse' 
                />

                <button type='submit' className='w-full py-2 px-4 border cursor-pointer border-slate-700 bg-sky-700 hover:bg-sky-600 hover:animate-pulse transition duration-300 ease-in-out rounded-md'>Enviar</button>
            </form>
            </div>
            {/* Redes */}
            <h2 className="text-3xl font-bold text-center mt-12 mb-6">Redes</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/martin-rodriguez-a71748342/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-700 hover:scale-110 hover:bg-slate-600 transition duration-300 ease-in-out"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-10 h-10 rounded-lg"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Artarexces"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-700 hover:scale-110 hover:bg-slate-600 transition duration-300 ease-in-out"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                  alt="GitHub"
                  className="w-10 h-10"
                />
              </a>

              {/* Copiar email */}
              <button
                onClick={copyEmail}
                className="p-2 rounded-full bg-slate-700 hover:scale-110 cursor-pointer hover:bg-slate-600 transition duration-300 ease-in-out flex items-center"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Gmail"
                  className="w-10 h-10"
                />
              </button>
            </div>
        </section>
    )
}

export default Contact
