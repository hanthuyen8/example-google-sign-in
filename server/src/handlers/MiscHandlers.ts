import {Request, Response} from "express";

export const healthCheckHandler = (_req: Request, res: Response): void => {
    res.status(200).send('OK')
};