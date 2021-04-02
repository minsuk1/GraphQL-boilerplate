import {gql} from 'apollo-server-express';
import comment from '../models/comment';

const typeDefs = gql`
   type comment {
    id: Int
    content: String
    createdAt: String
    updatedAt: String
    userId: String
}

`;

const resolvers = {
    Query: {
      users: async (parent: any, _args: any, context: any) => {
       try {
          const user = await comment.findAll({});
          return user;
       } catch (error) {
        throw new Error(error);
       }
      },
    },
  };


exports = {
    typeDefs: typeDefs,
    resolvers: resolvers,
};
