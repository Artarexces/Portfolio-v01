import mongoose from "mongoose"

process.loadEnvFile();

const URI_DB = process.env.URI_DB || ""


const connectDB = async () => {
try {
    await mongoose.connect(URI_DB)
    console.log("Conectado con exito a mongoDB")
} catch (error) {
    console.error("Error al conectar a la base de datos", error)
}
}

export { connectDB }