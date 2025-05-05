import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contact.routes.js"
import path from "path"


dotenv.config({ path: path.resolve("server/.env") }); 



const app = express(); 
const PORT = process.env.PORT || 4500; 

app.use(cors({    
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"], 
    allowedHeaders: ["Content-Type"]}));
app.use(express.json());

connectDB

app.use ("/api/contact", contactRoutes); 
app.get("/", (req, res) =>{
    res.send("Api funcionando correctamente")
}); 

app.listen(PORT, () => {
    console.log(`Servidor conectado con exito localhost:${PORT}.`)
});