import mongoose from "mongoose";

const UserTasks = new mongoose.Schema(
    {   
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        task_name : {
            type: String,
            required: true,
        },
        task_description : {
            type: String,
            required: true,
        },
        task_priority : {
            type: Number,
            required: true,
            min: 1,
            max: 10,
        },
        task_date_delivery : {
            type: String,
            required: false,
        },
        task_obs : {
            type: [String],
            required: true,
        },
        task_complete_porcent: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        }  
    },
    { timestamps: true }
); 

export default mongoose.model("UserTAsks", UserTasks);