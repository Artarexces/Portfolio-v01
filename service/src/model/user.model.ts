import mongoose,{ Document , Schema, model} from "mongoose"


interface UserInterface extends Document {
    name: String,
    email: String, 
    message: String,
    createdAt: Date
}

interface UserInput {
    name: String,
    email: String, 
    message: String,
}


const userSchema: Schema = new Schema<UserInterface>({
    name:{ type:String, required:true },
    email:{ type:String, required:true, unique:true },
    message:{ type:String, required:true },
    createdAt:{ type:Date, default:Date.now }
})


userSchema.set("strict", true) 

const UserModel = model<UserInterface>('user', userSchema)

export { UserInput, UserInterface, UserModel }