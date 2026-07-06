import type { Request, Response } from "express";
import { pool } from "../db/db.js";

export async function getRepo(req: Request, res: Response) {
    const savedRepo = await pool.query(
        `SELECT * FROM SavedRepos where user_id=$1`,
        [req.userId]
    )
    
    res.status(200).json(savedRepo.rows)
}