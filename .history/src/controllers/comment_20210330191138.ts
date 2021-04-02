import {gql} from 'apollo-server-express';
import Comment from '../models/comment';

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
          const Comment = await Comment.findAll({});
          return Comment;
       } catch (error) {
        throw new Error(error);
       }
      },
    },
  };


export {
    CommenttypeDefs, Commentresolvers,
};
