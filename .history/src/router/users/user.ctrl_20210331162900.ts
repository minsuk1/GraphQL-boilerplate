import {RequestHandler} from 'express';
import User from '../../models/user';
import Post from '../../models/post';
import NotFoundException from '../../exceptions/NotFoundException';
import {logger} from '../../config/winston';
import {userService} from '../../service';


export const find: RequestHandler = async (req, res, next) => {
  try {
      const getUserArgs = {id: parseInt(req.params.id, 10)};
      const userInfo = await userService.getUser(getUserArgs);
      res.json({
        userInfo,
      });
  } catch (err) {
      next(err);
  }
};


export const insert: RequestHandler = async (req, res) => {
  await User.create(req.body);

  res.json({'message': '추가성공'});
};
