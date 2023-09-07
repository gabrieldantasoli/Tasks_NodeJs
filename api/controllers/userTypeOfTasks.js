import UserTypeOfTasks from "../models/UserTypeOfTasks.js";

export const createUserTypeOfTasks = async (req, res, next) => {
    try {
  
      const newUserTypeOfTasks = new UserTypeOfTasks({
        ...req.body,
      });
  
      await newUserTypeOfTasks.save();
      res.status(200).send("Type of task has been created sucessfuly!");
    } catch (err) {
      next(err);
    }
};

export const updateUserTypeOfTasks = async (req, res, next) => {
    try {
        const userTypeOfTasks = await UserTypeOfTasks.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(userTypeOfTasks);
    } catch (err) {
        next(err);
    }
}

export const deleteUserTypeOfTasks = async (req, res , next) => {
    try {
        await UserTypeOfTasks.findByIdAndDelete(req.params.id);
        res.status(200).json("Type of task has been deleted!")
    } catch (err) {
        next(err);
    }
}

export const getUserTypeOfTasks = async (req, res, next) => {
    try {
        const userTypeOfTasks = await UserTypeOfTasks.find({"user": req.params.id}).lean();
        res.status(200).json(userTypeOfTasks);
    } catch (err) {
        next(err);
    }
};

export const countUserTypeOfTasks = async (req, res, next) => {
    try {
        const userTypeOfTasksCount = await UserTypeOfTasks.countDocuments({"user": req.params.id, "type": req.params.type});
        res.status(200).json(userTypeOfTasksCount);
    } catch (err) {
        next(err);
    }
};

export const getUserTask = async (req, res, next) => {
    try {
        const userTask = await UserTypeOfTasks.find({"user": req.params.id, "_id": req.params.id});
        res.status(200).json(userTask);
    } catch (err) {
        next(err);
    }
};