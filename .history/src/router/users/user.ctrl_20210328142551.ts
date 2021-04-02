import * as express from 'express';  
import { RequestHandler } from "express";
import User from '../../models/user';
import Post from '../models/post';


interface IUser extends User {
    PostCount: number;
}

export const find: RequestHandler  = async (req, res, next) => {
    try {
        const user = await User.findOne({
            include:[{
                model:'Posts'
            }]
        });

          return res.json({
              user
          })

    } catch (err) {
        next(err);
    }
};


