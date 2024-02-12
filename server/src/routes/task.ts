import express from "express";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task";
const router = express.Router();

router.get("/getTasks", getTasks);
router.post("/createTask", createTask);
router.get("/getTask/:taskid", getTask);
router.put("/updateTask/:taskid", updateTask);
router.delete("/deleteTask/:taskid", deleteTask);

export default router;
