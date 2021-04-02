import * as express from 'express';
import {RequestHandler} from 'express';
import comment from '../models/comment';

// const resolvers = {
//   Query: {
//     finduser: async (parent: any, _args: any, context: any) => {
//       const user = await User.findAll({});
//       return user;
//     },
//   },
// };


const resolvers2 = {
  Query: {
    comments: async (parent: any, _args: any, context: any) => {
     try {
        const comments = await comment.findAll({});
        return comments;
     } catch (error) {
      throw new Error(error);
     }
    },
  },
};

export default resolvers2;


