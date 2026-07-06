import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.js"
import { findRepo } from "./controllers/searchController.js"
import { saveRouter } from "./routes/save.js"
import type { Request, Response, NextFunction } from "express"

const PORT = 8000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/search", findRepo)

app.use("/auth", authRouter)
app.use("/user", authenticateUser, saveRouter)

function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(" ")[1]
    console.log(token)
    next()
}


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})