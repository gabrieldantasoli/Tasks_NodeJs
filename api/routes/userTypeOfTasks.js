import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import { countUserTypeOfTasks, createUserTypeOfTasks, deleteUserTypeOfTasks, getUserTypeOfTask, getUserTypeOfTasks, updateUserTypeOfTasks } from "../controllers/userTypeOfTasks.js";


const router = express.Router();

router.post("/", verifyUser, createUserTypeOfTasks);

router.put("/update/:id", verifyUser, updateUserTypeOfTasks);

router.get("/:user/:id", verifyUser, getUserTypeOfTask);

router.get("/:id", verifyUser, getUserTypeOfTasks);

router.get("/count/:id/:type", verifyUser, countUserTypeOfTasks);

router.delete("/:id", verifyUser, deleteUserTypeOfTasks);


export default router;