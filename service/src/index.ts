import express from "express";
import cors from "cors"
import { connectDB } from "./config/mongo.config";
import userContact from "./routes/user.routes"

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
}))



connectDB()

app.use(userContact)

app.listen(PORT, () => {
    console.log(`Connexión al servidor HTTP:${PORT} lograda con exito!`)
})