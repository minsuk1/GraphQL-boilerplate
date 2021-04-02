import createHttpError from 'http-errors';
import express from 'express';

export const 404Error: express.RequestHandler = (req, res, next) => {
    next(createHttpError(404));
};
