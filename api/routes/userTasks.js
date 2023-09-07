import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import { createUserTask, deleteUserTask, getUserTask, getUserTasks, updateUserTask } from "../controllers/userTasks.js";


const router = express.Router();

router.post("/", createUserTask);

router.put("/update/:id", verifyUser, updateUserTask);

router.get("/:user/:id", verifyUser, getUserTask);

router.get("/:id", verifyUser, getUserTasks);

router.delete("/:id", verifyUser, deleteUserTask);

export default router;