import express from "express"
import cors from "cors"

const PORT = 8000

const app = express()

app.use(cors())

app.get("/api", (req, res) => {
    res.json("Hello from express")
})

app.get("/search", async (req, res) => {
    const repo = await fetch(`https://api.github.com/users/${'Hassan767275'}/repos`)
    const repoJson = await repo.json()
    res.json(repoJson)

})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})