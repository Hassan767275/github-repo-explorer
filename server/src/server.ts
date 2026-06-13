import express from "express"
import cors from "cors"

const PORT = 8000

const app = express()

app.use(cors())

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
    res.json(repoJson)

})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})