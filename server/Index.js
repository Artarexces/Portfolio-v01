import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contact.routes.js"

dotenv.config(); 


const app = express(); 
const PORT = process.env.PORT || 4500; 

app.use(cors());
app.use(express.json());

connectDB();

app.use ("/api/contact", contactRoutes); 
app.get("/", (res, req) =>{
    res.send("Api funcionando correctamente")
}); 

app.listen(PORT, () => {
    console.log(`Servidor conectado con exito localhost:${PORT}.`)
});