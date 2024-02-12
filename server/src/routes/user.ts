import express from "express";
import { fatchTask } from "../controllers/user";
const router = express.Router();

router.get("/:userId/tasks", fatchTask);

export default router;
