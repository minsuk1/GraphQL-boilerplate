import NotFoundException from '../exceptions/NotFoundException';
import {RequestHandler} from 'express';
import User from '../models/user';

export const getUserInfo = async () => {
    const user = await User.findAll({});
    if (!user) {
        throw new NotFoundException('no user');
      }
    return user;
};


export const insertUser: RequestHandler = async (a) => {
    await User.create(a);

    res.json({'message': '추가성공'});
};
