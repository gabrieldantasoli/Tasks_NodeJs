import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import { countUserTasks, createUserTask, deleteUserTask, getUserTask, getUserTasks, updateUserTask } from "../controllers/userTasks.js";


const router = express.Router();

router.post("/", verifyUser, createUserTask);

router.put("/:id", verifyUser, updateUserTask);

router.get("/:user/:id", verifyUser, getUserTask);

router.get("/:id", verifyUser, getUserTasks);

router.get("/count/:id/:type", verifyUser, countUserTasks)

router.delete("/:id", verifyUser, deleteUserTask);

export default router;