import mongoose from "mongoose";

const UserTaskComment = new mongoose.Schema(
    {   
        task: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserTasks",
            required: true,
        },
        comment : {
            type: String,
            required: true,
            unique: true
        },
        complete : {
            type: Boolean,
            required: true,
        },
        comment_priority : {
            type: Number,
            required: true,
            min: 1,
            max: 10,
        }
    },
    { timestamps: true } 
); 

export default mongoose.model("UserTypeOfTaks", UserTypeOfTasks);