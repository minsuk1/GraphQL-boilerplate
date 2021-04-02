import NotFoundException from '../exceptions/NotFoundException';
import User from '../models/user';
import Comment from '../models/comment';
import {logger} from '../config/winston';


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

    if (!user) {
      logger.info('no user');
      throw new NotFoundException('no user');
    }

    return user;
};

