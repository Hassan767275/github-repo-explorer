import type { Request, Response } from "express";
import { pool } from "../db/db.js";

export async function deleteRepo(req: Request, res: Response) {
    const result = await pool.query(
        `DELETE FROM SavedRepos where repo_name=$1`,
        [req.query.name]
    )

    res.status(200).json("repo deleted")
}