import type { Request, Response } from "express"

export function registerUser(req: Request, res: Response) {
    console.log(req.body)
}