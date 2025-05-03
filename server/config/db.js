import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const URI_DB = process.env.URI_DB || ""

export const connectDB = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log("Conectado a mongoDB correctamente")
    } catch (error) {
        console.error("Error al conectar a la base de datos", error)
    }
}

connectDB();