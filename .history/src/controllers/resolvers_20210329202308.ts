import User from '../models/user';

const resolvers = {
  Query: {
    readUsers: (parent, args, context) => {
      return User.find({});
    },
  },
};

export default resolvers;


hello: () => 'hello world',