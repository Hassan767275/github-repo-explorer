import { Router } from "express";
import { saveRepo } from "../controllers/saveRepo.js";

export const saveRouter = Router()

saveRouter.post("/favorites", saveRepo)