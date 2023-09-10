import TaskComments from "../models/TaskComments";

export const createTaskComment = async (req,res,next) => {
    try {
        const createTaskComment = new TaskComments({
            ...req.body,
        });
        await createTaskComment.save();
        res.status(200).send("Task comment has been created sucessfuy!");
    } catch (err) {
        next(err);
    }
};

export const updateTaskComment = async (req, res,next) => {
    try{
        const updateTaskComment = await TaskComments.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updateTaskComment);
    } catch (err){
        next (err);
    }
};

export const deleteTaskComment = async(req,res,next) => {
    try {
        await TaskComments.findByIdAndDelete(req.params.id);
        res.status(200).json("TaskComment has been deleted")
    } catch (err) {
        next(err);
    }
};

export const getTaskComment = async (req,res,next) => {
    try {
        const taskComment = await TaskComments.findById(req.params.id);
        res.status(200).json(taskComment);
    } catch (err) {
        next(err);
    }
};

