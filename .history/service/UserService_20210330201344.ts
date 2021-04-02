import NotFoundException from '../exceptions/NotFoundException';
import User from '../models/user';

export const getUserInfo = async ({userId}) => {
    const userInfo = await User.findAll({});
    return userInfo;
};