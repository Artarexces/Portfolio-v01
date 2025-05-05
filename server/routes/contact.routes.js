import express from "express"
import { handleSubmit } from "../controllers/contact.controllers.js"

const router = express.Router(); 

router.post("/", handleSubmit);

export default router; 

