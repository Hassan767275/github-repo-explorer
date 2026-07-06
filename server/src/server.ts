import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.js"
import { findRepo } from "./controllers/searchController.js"
import { saveRouter } from "./routes/save.js"
import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"

const PORT = 8000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/search", findRepo)

app.use("/auth", authRouter)
app.use("/user", authenticateUser, saveRouter)

function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({message: "Access denied. No token provided."})
    }
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, payload) => {
        if (err) {
            return res.status(403).json({message: "Invalid or expired token"})
        }

        if (typeof payload === 'object') {
            req.userId = payload.userId
            next()
        }
    })
}


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})