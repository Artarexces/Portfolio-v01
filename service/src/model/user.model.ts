import mongoose,{ Schema, model} from "mongoose"


interface UserI {
    name: String,
    email: String, 
    message: String,
}


const userSchema: Schema = new Schema<UserI>({
    name:{ type:String, required:true },
    email:{ type:String, required:true, unique:true },
    message:{ type:String, required:true },
})


userSchema.set("strict", true) 

export const UserModel = model<UserI>('User', userSchema)

