import {gql} from 'apollo-server-express';
import comment from '../models/Comment';

const CommenttypeDefs = gql`
   type comment {
    id: Int
    content: String
    createdAt: String
    updatedAt: String
    userId: String
}

`;

const Commentresolvers = {
    Query: {
        comments: async (parent: any, _args: any, context: any) => {
       try {
          const comment = await comment.findAll({});
          return comment;
       } catch (error) {
        throw new Error(error);
       }
      },
    },
  };


export {
    CommenttypeDefs, Commentresolvers,
};
