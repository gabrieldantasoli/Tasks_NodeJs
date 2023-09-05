import express from "express";
import { verifyUser } from "../utils/verifyToken.js";

import { deleteUser, updateUser, getUser } from "../controllers/users.js";

const router = express.Router();

// UPDATE
router.put("/:id", verifyUser, updateUser); 

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser); 

export default router;