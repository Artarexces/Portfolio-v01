import mongoose,{ Schema, model} from "mongoose"


interface Icontact {
    name: String,
    email: String, 
    message: String,
}


const contactSchema: Schema = new Schema<Icontact>({
    name:{ type:String, required:true },
    email:{ type:String, required:true, unique:true },
    message:{ type:String, required:true },
}, {
    versionKey: false
})


contactSchema.set("strict", true) 

export const contactModel = model<Icontact>('Contact', contactSchema)

