import NotFoundException from '../exceptions/NotFoundException';

export const getUserInfo = async ({userId}) => {
    const userInfo = await getUser({});
    delete userInfo.provider;
    return userInfo;
};