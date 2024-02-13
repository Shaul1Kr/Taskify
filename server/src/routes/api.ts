import express from "express";
import auth from "./auth";
import task from "./task";
import user from "./user";
import search from "./search";

const router = express.Router();

router.use("/auth", auth);
router.use("/task", task);
router.use("/user", user);
router.use("/serach", search);

export default router;
