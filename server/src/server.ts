import express from "express"
import cors from "cors"

const PORT = 8000

const app = express()

app.use(cors())

app.get("/api", (req, res) => {
    res.json("Hello from express")
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})