import createHttpError from "http-errors";
import { NextFunction, Request, Response } from 'express';

export const notFoundCreator: express.RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404));
};