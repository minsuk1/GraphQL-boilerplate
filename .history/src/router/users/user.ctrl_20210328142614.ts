import * as express from 'express';  
import { RequestHandler } from "express";
import User from '../../models/user';
import Post from '../../models/post';


interface IUser extends User {
    PostCount: number;
}

export const find: RequestHandler  = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: parseInt(req.params.id, 10) },,
            include:[{
                model: Post,
                as: 'Posts',
                attributes: ['id'],
            }]
        });

          return res.json({
              user
          })

    } catch (err) {
        next(err);
    }
};


