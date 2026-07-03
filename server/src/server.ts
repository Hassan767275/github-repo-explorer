import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.js"
import { findRepo } from "./controllers/searchController.js"

const PORT = 8000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/search", findRepo)

app.use("/auth", authRouter)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})