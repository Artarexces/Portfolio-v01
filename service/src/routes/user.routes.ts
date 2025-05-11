import { Router } from "express";
import { UserModel } from "../model/user.model";

const router = Router()

router.post('/api/contact', async (req,res) => {
    try {
        const { name, email, message } = req.body
        const newUser = new UserModel(req.body)
        await newUser.save()
        res.status(200).json({success : true, message: "guardado en DB."})
    } catch (error) {
        console.error('error en guardar en la DB.' ,error)
        res.status(500).json({success: false, error: "error interno del servidor"})
    }
})


export default router