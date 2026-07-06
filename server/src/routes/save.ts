import { Router } from "express";
import { saveRepo } from "../controllers/saveRepo.js";
import { getRepo } from "../controllers/getRepo.js";
import { deleteRepo } from "../controllers/deleteRepo.js";

export const saveRouter = Router()

saveRouter.post("/favorites", saveRepo)
saveRouter.get("/favorites", getRepo)
saveRouter.delete("/favorites", deleteRepo)