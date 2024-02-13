import express from "express";
import { filterAndSearch } from "../controllers/search";
const router = express.Router();

router.post("/filterAndSearch", filterAndSearch);

export default router;
