import express from "express";
import { assign, getComments, postComment } from "../controllers/collaboration";
const router = express.Router();

router.post("/:taskId/assign", assign);
router.post("/:taskId/oostComment", postComment);
router.get("/:taskId/getComments", getComments);

export default router;
