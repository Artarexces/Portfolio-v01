import mongoose from "mongoose";

const contactSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true,unique: true},
    mensagge: { type: String, requirde: true}
}, {
    timestamps: true
});

export default mongoose.model("Contact", contactSchema); 