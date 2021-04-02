import NotFoundException from '../exceptions/NotFoundException';
import User from '../models/user';
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

