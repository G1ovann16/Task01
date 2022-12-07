import { Router } from "express";
import { getJokes } from "../controllers/jokes.controllers.js";

const router = Router();
router.get("/github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json", getJokes);
export default router;
