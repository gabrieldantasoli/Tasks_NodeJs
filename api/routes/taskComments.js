import express from "express";
import { verifyUser } from "../utils/verifyToken";

import { deleteTaskComment,updateTaskComment,getTaskComment,createTaskComment } from "../controllers/taskComments";
import { getUser } from "../controllers/users";

const route = express.Router();

//CREATE
router.post("/",verifyUser,createTaskComment);

// UPDATE
route.put("/:id",verifyUser,updateTaskComment);

// DELETE
route.delete("/:id",verifyUser,deleteTaskComment);

// GET
route.get("/:id",verifyUser,getTaskComment);

export default router;
