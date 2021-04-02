import NotFoundException from '../exceptions/NotFoundException';
import {RequestHandler} from 'express';
import User from '../models/user';
import Post from '../models/post';

// export const getUserInfo = async () => {
//     const user = await User.findAll({});
//     if (!user) {
//         throw new NotFoundException('no user');
//       }
//     return user;
// };
















// export const getUser = async (args: { id: number }) => {
//     const {id: id} = args;
//     const user = await User.findOne({
//         where: {id: id},
//         include: [{model: Post,
//                     as: 'Posts',
//                     attributes: ['id']}],
//                 });
//     return user;
// };

export const insertUser: RequestHandler = async (req, res) => {
    await User.create(req.body);

    res.json({'message': '추가성공'});
};
