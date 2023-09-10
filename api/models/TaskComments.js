import mongoose from "mongoose";

const TaskCommentsSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        task: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserTAsks",
            required: true,
        },
        commentText: {
            type: Text,
            required: true,
        },
    },
    { timestamps: true }
);

TaskCommentsSchema.index({user: 1, task: 1}, {unique: false})

export default mongoose.model("TaskComments",TaskCommentsSchema);
