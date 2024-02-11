import express from "express";
import auth from "./auth";
import task from "./task";

const router = express.Router();

router.use("/auth", auth);
router.use("/task", task);

export default router;
