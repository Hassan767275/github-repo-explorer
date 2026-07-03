import express from "express"
import cors from "cors"
import { registerUser } from "./controllers/authConroller.js"

const PORT = 8000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api", (req, res) => {
    res.json("Hello from express")
})

app.get("/search", async (req, res) => {
    const { username } = req.query
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    const repoJson = await response.json()

    if (!response.ok) {
        return res.status(404).json({error: "invalid username"})
    }
    res.status(200).json(repoJson)
})

app.post("/auth/register", registerUser)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})