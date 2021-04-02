import {RequestHandler} from 'express';
import User from '../../models/user';
import Post from '../../models/post';
import NotFoundException from '../../exceptions/NotFoundException';
import {logger} from '../../config/winston';
import {userService} from '../../service';

// interface IUser extends User {
//     PostCount: number;

//   }

// export const find: RequestHandler = async (req, res) => {
//     const user = await User.findOne({

//       where: {id: parseInt(req.params.id, 10)},
//       include: [{
//         model: Post,
//         as: 'Posts',
//         attributes: ['id'],
//       }],
//     });
//     if (!user) {
//       logger.info('no user');
//       throw new NotFoundException('no user');
//     }
//     const jsonUser = user.toJSON() as IUser;
//     jsonUser.PostCount = jsonUser.Posts ? jsonUser.Posts.length : 0;
//     return res.json(jsonUser);
// };

export const find: RequestHandler = async (req, res, next) => {
  try {
      const getUserArgs = {id: parseInt(req.params.id, 10)};
      const userInfo = await userService.getUser(getUserArgs);
      res.json({
          email: userInfo.email,
          nickname: userInfo.nickname,
      });
  } catch (err) {
      next(err);
  }
};


export const insert: RequestHandler = async (req, res) => {
  await User.create(req.body);

  res.json({'message': '추가성공'});
};
