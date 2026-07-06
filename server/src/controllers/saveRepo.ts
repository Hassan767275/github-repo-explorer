import type { Request, Response } from "express"
import { pool } from "../db/db.js"

export async function saveRepo(req: Request, res: Response) {
    const { name, description, language, stargazers_count, html_url } = req.body

    const repoExists = await pool.query(
        `SELECT * FROM SavedRepos WHERE repo_name=$1`,
        [name]
    )
    if (repoExists.rowCount !== null && repoExists.rowCount > 0) {
        return res.status(409).json({message: "Repo is already saved"})
    }
    
    const result = await pool.query(
        `INSERT INTO SavedRepos
        (user_id, repo_name, description, language, stargazers_count, html_url)
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [req.userId, name, description, language, stargazers_count, html_url]
    )

    res.status(200).json({message: "Your repo is now saved"})
}