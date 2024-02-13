import express from "express";
import auth from "./auth";
import task from "./task";
import user from "./user";
import search from "./search";
import collaboration from "./collaboration";
import notification from "./notification";

const router = express.Router();

router.use("/auth", auth);
router.use("/task", task);
router.use("/user", user);
router.use("/serach", search);
router.use("/collaboration", collaboration);
router.use("/notification", notification);

export default router;
