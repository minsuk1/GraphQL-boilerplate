import createHttpError from "http-errors";
import { NextFunction, Request, Response } from 'express';
import * as express from 'express';  

export const notFoundCreator: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404));
};