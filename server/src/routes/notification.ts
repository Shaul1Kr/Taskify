import express from "express";
import { getNotification } from "../controllers/notification";

const router = express.Router();

router.get("/getNotification", getNotification);

export default router;
