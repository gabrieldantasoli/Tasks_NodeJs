import UserTask from "../models/UserTasks.js";

export const createUserTask = async (req, res, next) => {
    try {
  
      const newUserTask = new UserTask({
        ...req.body,
      });
  
      await newUserTask.save();
      res.status(200).send("Task has been created sucessfuly!");
    } catch (err) {
      next(err);
    }
};

export const updateUserTask = async (req, res, next) => {
    try {
        const updateUserTask = await UserTask.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateUserTask);
    } catch (err) {
        next(err);
    }
}

export const deleteUserTask = async (req, res , next) => {
    try {
        await UserTask.findByIdAndDelete(req.params.id);
        res.status(200).json("User task has been deleted!")
    } catch (err) {
        next(err);
    }
}

export const getUserTasks = async (req, res, next) => {
    try {
        const userTask = await UserTask.find({"user": req.params.id}).lean();
        res.status(200).json(userTask);
    } catch (err) {
        next(err);
    }
};

// export const countUserTasks = async (req, res, next) => {
//     try {
//         const userTasksCount = await UserTask.countDocuments({"user": req.params.id});
//         res.status(200).json(userTasksCount);
//     } catch (err) {
//         next(err);
//     }
// };

export const getUserTask = async (req, res, next) => {
    try {
        const userTask = await UserTask.find({"user": req.params.user, "_id": req.params.id});
        res.status(200).json(userTask);
    } catch (err) {
        next(err);
    }
};