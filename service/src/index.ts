import { connectDB } from "./config/mongo.config";
import { model } from "./model/user.model";
import mongoose from "mongoose";
import express from "express";

const PORT = process.env.PORT || 4000

const app = express()


app.listen(PORT, () => {
    console.log(`Connexión al servidor HTTP:${PORT} lograda con exito!`)
    connectDB()
})