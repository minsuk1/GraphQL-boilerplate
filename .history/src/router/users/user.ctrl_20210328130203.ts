import * as express from 'express';  
import { RequestHandler } from "express";



export const login: RequestHandler  = async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
              userId: req.body.userId,
            },
          });



    } catch (err) {
        next(err);
    }
};

