import type { Request, Response } from "express"
import bcrypt from "bcryptjs"
import { pool } from "../db/db.js"

export async function registerUser(req: Request, res: Response) {
    const {username, email, password } = req.body

    if (!username || username.trim() === "") {
        return res.status(400).json({message: "Username is required"})
    }
    
    if (!email || email.trim() === "") {
        return res.status(400).json({message: "Email is required"})
    }
    
    if (!password || password.trim() === "") {
        return res.status(400).json({message: "Password is required"})
    }

    const hashed = await bcrypt.hash(password, 10)

    const result = await pool.query(
        `INSERT INTO UserTable
        (username, email, password)
        VALUES ($1, $2, $3)`,
        [username, email, hashed]
    )
    console.log(result)
}