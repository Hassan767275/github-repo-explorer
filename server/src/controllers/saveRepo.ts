import type { Request, Response } from "express"

export function saveRepo(req: Request, res: Response) {
    const { name, description, language, stargazers_count, html_url } = req.body
    
}