import express from "express";
import auth from "./auth";
import task from "./task";
import user from "./user";
import notification from "./notification";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.use("/auth", auth);
router.use("/notification", notification);
router.use(verifyToken);
router.use("/task", task);
router.use("/user", user);

export default router;
