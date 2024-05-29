import express from "express";
import { fatchTask, getUsers } from "../controllers/user";
const router = express.Router();

router.get("/:userId/tasks", fatchTask);
router.get("/", getUsers);

export default router;
