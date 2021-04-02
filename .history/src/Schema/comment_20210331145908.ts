import NotFoundException from '../exceptions/NotFoundException';
import {gql} from 'apollo-server-express';
import Comment from '../models/comment';

const commentTypeDefs = gql`
   type comment {
    id: Int
    content: String
    createdAt: String
    updatedAt: String
    userId: String
}

`;

const commentResolvers = {
    Query: {
        comments: async (parent: any, _args: any, context: any) => {
          const comment = await Comment.findAll({});
          if (!comment) {
            throw new NotFoundException('no comment');
          }
          return comment;
      },
    },
  };


export {
  commentTypeDefs, commentResolvers,
};
