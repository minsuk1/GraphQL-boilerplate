import * as express from 'express';
import {RequestHandler} from 'express';
import User from '../../models/user';
import Post from '../../models/post';
import createHttpError = require('http-errors');

interface IUser extends User {
    PostCount: number;

  }

export const find: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const user = await User.findOne({

      where: {id: parseInt(req.params.id, 10)},
      include: [{
        model: Post,
        as: 'Posts',
        attributes: ['id'],
      }],
    });
    if (!user) return res.status(404).send('no user');
    const jsonUser = user.toJSON() as IUser;
    jsonUser.PostCount = jsonUser.Posts ? jsonUser.Posts.length : 0;
    return res.json(jsonUser);
  } catch (err) {
    next(err);
  }
};


// export const find: RequestHandler = async (req, res, next) => {
//     console.log(req.params.id);
//     const user = await User.findOne({

//       where: {id: parseInt(req.params.id, 10)},
//       include: [{
//         model: Post,
//         as: 'Posts',
//         attributes: ['id'],
//       }],
//     });
//     if (!user) {
//       throw createHttpError(403, {code: 200, message: '존재하지 않는 task'});
//     }
//     const jsonUser = user.toJSON() as IUser;
//     jsonUser.PostCount = jsonUser.Posts ? jsonUser.Posts.length : 0;
//     return res.json(jsonUser);
// };
