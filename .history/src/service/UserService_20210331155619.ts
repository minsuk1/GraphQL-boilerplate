import NotFoundException from '../exceptions/NotFoundException';
import {RequestHandler} from 'express';
import User from '../models/user';

// export const getUserInfo = async () => {
//     const user = await User.findAll({});
//     if (!user) {
//         throw new NotFoundException('no user');
//       }
//     return user;
// };

export const getUser = async (args: { uid: string }) => {
    const {uid: _id} = args;
    const user = (await User.findOne({_id})) as UsersDocument;


    return user;
};

export const insertUser: RequestHandler = async (req, res) => {
    await User.create(req.body);

    res.json({'message': '추가성공'});
};
