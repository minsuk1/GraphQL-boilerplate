import * as express from 'express';  
import { RequestHandler } from "express";
import User from '../../models/user';



export const find: RequestHandler  = async (req, res, next) => {
    try {
        const user = await User.findAll();

          return res.json({
              user
          })

    } catch (err) {
        next(err);
    }
};

