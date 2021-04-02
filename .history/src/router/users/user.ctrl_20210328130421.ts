import * as express from 'express';  
import { RequestHandler } from "express";
import User from '../models/user';



export const login: RequestHandler  = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
              userId: req.body.userId,
            },
          });



    } catch (err) {
        next(err);
    }
};

