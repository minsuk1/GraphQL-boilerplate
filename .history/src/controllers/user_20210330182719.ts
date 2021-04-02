import {gql} from 'apollo-server-express';
import User from '../models/user';

const typeDefs = gql`
  type user {
    id: Int
    nickname: String
    userId: String
    password: String
    createdAt: String
    updatedAt: String
}

`;

const resolvers = {
    Query: {
      users: async (parent: any, _args: any, context: any) => {
       try {
          const user = await User.findAll({});
          return user;
       } catch (error) {
        throw new Error(error);
       }
      },
    },
  };


  module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers,
};
