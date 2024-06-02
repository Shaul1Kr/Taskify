import express from "express";
import { sendReminders } from "../controllers/notification";

const router = express.Router();

router.get("/sendReminders", sendReminders);

export default router;
