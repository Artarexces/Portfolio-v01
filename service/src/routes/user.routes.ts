import { Router } from "express";
import { contactModel } from "../model/user.model";

const router = Router()

router.post('/api/contacto', async (req,res) => {
    try {
        const newContact = new contactModel(req.body)
        await newContact.save()
        res.status(200).json({success : true, message: "guardado en DB."})
    } catch (error) {
        console.error('error en guardar en la DB.' ,error)
        res.status(500).json({success: false, error: "error interno del servidor"})
    }
})


export default router