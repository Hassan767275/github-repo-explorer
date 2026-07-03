import type { Request, Response } from "express"

export async function findRepo(req: Request, res: Response) {
    const { username } = req.query
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    const repoJson = await response.json()

    if (!response.ok) {
        return res.status(404).json({error: "invalid username"})
    }
    res.status(200).json(repoJson)
}