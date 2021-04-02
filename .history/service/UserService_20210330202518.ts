import NotFoundException from '../exceptions/NotFoundException';
import User from '../models/user';

export const getUserInfo = async () => {
    const user = await User.findAll({});
    if (!user) {
        throw new NotFoundException('no user');
      }
    return user;
};

