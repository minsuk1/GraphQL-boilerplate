import NotFoundException from '../exceptions/NotFoundException';
import {RequestHandler} from 'express';
import User from '../models/user';
import Post from '../models/post';
import Comment from '../models/comment';


export const getUser = async (args: { id: number }) => {
    const {id: id} = args;
    const user = await User.findOne({

      where: {id: id},
      include: [{
        model: Comment,
        as: 'Comment',
        attributes: ['id', 'content'],
      }],
    });

    return user;
};

export const insertUser: RequestHandler = async (req, res) => {
    await User.create(req.body);

    res.json({'message': '추가성공'});
};
