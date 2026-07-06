import type { Request, Response } from "express";

export function deleteRepo(req: Request, res: Response) {
    res.status(200).json("hello")
}