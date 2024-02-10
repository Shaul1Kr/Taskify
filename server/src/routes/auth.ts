import express from "express";
import { changePassword, login, register } from "../controllers/auth";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/changePassword", changePassword);

export default router;
