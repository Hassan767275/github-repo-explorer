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

    const usernameOrEmailExists = await pool.query(
        `SELECT * FROM UserTable WHERE username=$1 OR email=$2`,
        [username, email]
    )

    if (usernameOrEmailExists.rowCount !== null && usernameOrEmailExists.rowCount > 0) {
        return res.status(409).json({message: "Username  or email already exists"})
    }

    const hashed = await bcrypt.hash(password, 10)

    await pool.query(
        `INSERT INTO UserTable
        (username, email, password)
        VALUES ($1, $2, $3)`,
        [username, email, hashed]
    )
    res.status(200).json({message: "Registration was succesful"})
}

export async function loginUser(req: Request, res: Response) {
    const { usernameOrEmail, password } = req.body

    if ( !usernameOrEmail || usernameOrEmail.trim() === "") {
        return res.status(409).json({ message: "Username or Email is required to login"})
    }

    if ( !password || password.trim() === "") {
        return res.status(409).json({ message: "Password is required to login"})
    }
    
    const result = await pool.query(
        `SELECT * FROM UserTable WHERE username=$1 OR email=$2`,
        [usernameOrEmail, usernameOrEmail]
    )

    if ( result.rowCount === 0 ) {
        return res.status(401).json({ message: "Invalid credentials"})
    }

    const usersPassword = result.rows[0].password

    const passwordsMatch = await bcrypt.compare(password, usersPassword)

    if ( !passwordsMatch ) {
        return res.status(401).json({ message: "Invalid credentials"})
    }

    res.status(200).json({message: "Login succesfull"})
}