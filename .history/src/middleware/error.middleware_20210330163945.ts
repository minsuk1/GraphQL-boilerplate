import createHttpError from 'http-errors';
import express from 'express';

export const notFound: express.RequestHandler = (req, res, next) => {
    next(createHttpError(404));
};
