import type { Request, Response } from "express"

export function saveRepo(req: Request, res: Response) {
    console.log(req.body)
}