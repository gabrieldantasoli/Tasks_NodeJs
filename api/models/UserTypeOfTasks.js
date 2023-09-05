import mongoose from "mongoose";

const UserTypeOfTasks = new mongoose.Schema(
    {   
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        type : {
            type: String,
            required: true,
            unique: true
        },
        color : {
            type: String,
            required: true,
        },
    },
    { timestamps: true } 
); 

export default mongoose.model("UserTypeOfTaks", UserTypeOfTasks);