import User from '../models/user';

const resolvers = {
  Query: {
    finduser: async (parent: any, _args: any, context: any) => {
      const user = await User.findAll({});
      return user;
    },
  },
};



const resolvers = {
  Query: {
    finduser: async (parent: any, _args: any, context: any) => {
      const user = await User.findAll({});
      return user;
    },
  },
};

export default resolvers;


