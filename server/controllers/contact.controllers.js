import Contact from "../models/contact.model.js"


export const handleSubmit = async (req, res) => {
    try {
        const {name, email, message } = req.body
        if (!name || !email || !message){
            return res.status(400).json({error:"Todos los campos son obligatorios"});
        } 
        const newContact = new Contact({name, email, message});
        await newContact.save();
        return res.status(201).json({message: "Contacto agendado correctamente"});
    } catch (error) {
        console.error(error, "Error al guardar contacto")
        return res.status(500).json({error: "Error en el servidor"})
    }
}

