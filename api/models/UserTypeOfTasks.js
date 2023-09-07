import mongoose from "mongoose";

const UserTypeOfTasksSchema = new mongoose.Schema(
    {   
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        type_of: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } 
);

UserTypeOfTasksSchema.index({ user: 1, type_of: 1 }, { unique: true });

export default mongoose.model("UserTypeOfTasks", UserTypeOfTasksSchema);
