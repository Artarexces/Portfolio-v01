import mongoose from "mongoose";



export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI_DB)
        console.log("Conectado a mongoDB correctamente")
    } catch (error) {
        console.error("Error al conectar a la base de datos", error)
    }
}

